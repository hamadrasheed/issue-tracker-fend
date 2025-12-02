import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import client from "../api/client";
import type { IssueStatusType, IssueType, ModeType, ApiResponse } from "../types/issues.types";
import type { AxiosResponse } from "axios";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  status_id: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const IssueForm: React.FC<{ mode: ModeType }> = ({ mode }) => {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [statuses, setStatuses] = useState<IssueStatusType[]>([]);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", description: "", status_id: undefined }
  });

  // Fetch issue statuses
  useEffect(() => {
    (async () => {
      try {
        const res: AxiosResponse<ApiResponse<IssueStatusType[]>, any, {}> = await client.get<ApiResponse<IssueStatusType[]>>("/issue-status");
        setStatuses(res?.data?.result?.data);
      } catch {
        alert("Failed to load issue statuses");
      }
    })();
  }, []);

  // Load existing issue data if editing
  useEffect(() => {
    if (mode === "edit" && id) {
      (async () => {
        try {
          const resIssue: AxiosResponse<ApiResponse<IssueType>, any, {}> = await client.get<ApiResponse<IssueType>>(`/issues/${id}`);
          const data: IssueType = resIssue.data.result.data;

          setValue("title", data.title);
          setValue("description", data.description);
          setValue("status_id", data.status_id.toString());

        } catch {
          alert("Could not load issue");
        }
      })();
    }
  }, [mode, id, setValue]);

  const onSubmit = async (values: FormData) => {
    try {
      const payload = {
        ...values,
        status_id: values.status_id ? Number(values.status_id) : undefined,
      };
      if (mode === "create") {
        await client.post("/issues", payload);
      } else {
        await client.patch(`/issues/${id}`, payload);
      }
      navigate("/issues");
    } catch (err) {
      console.log('err', err);
      alert("Failed to save");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{mode === "create" ? "Create Issue" : "Edit Issue"}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow-md">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input {...register("title")} className="mt-1 w-full border rounded px-3 py-2" />
          {errors.title && <p className="text-xs text-red-600 mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea {...register("description")} rows={5} className="mt-1 w-full border rounded px-3 py-2" />
          {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select {...register("status_id")} className="mt-1 w-full border rounded px-3 py-2">
            <option value="">Select status</option>
            {statuses.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          {errors.status_id && <p className="text-xs text-red-600 mt-1">{errors.status_id?.message}</p>}
        </div>

        <div className="flex items-center space-x-3 mt-4">
          <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-sky-600 text-white rounded">
            {mode === "create" ? "Create" : "Save"}
          </button>
          <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
