import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "../api/client";
import type { Issue } from "../types/issues.types";
import { statusBadge } from "../constant/constants";

const IssueView: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [issue, setIssue] = useState<Issue | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchIssue = async () => {
        setLoading(true);
        try {
            const res: any = await client.get(`/issues/${id}`);
            setIssue(res.data.result.data);
        } catch (err) {
            console.log("err", err);
            setError("Could not load issue");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIssue();
    }, [id]);

    const handleDelete = async () => {
        if (!confirm("Delete this issue?")) return;
        try {
            await client.delete(`/issues/${id}`);
            navigate("/issues");
        } catch {
            alert("Failed to delete");
        }
    };

    if (loading) return <div className="text-center py-10">Loading…</div>;
    if (error) return <div className="text-red-600 text-center py-10">{error}</div>;
    if (!issue) return <div className="text-center py-10">Issue not found</div>;

    return (
        <div className="max-w-3xl mx-auto mt-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded shadow-md">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold text-slate-900">{issue.title}</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Created: {new Date(issue.created_at).toLocaleString()}
                    </p>
                    <p className="text-sm text-slate-500">
                        Last Updated: {new Date(issue.updated_at).toLocaleString()}
                    </p>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => navigate(`/issues/${issue.id}/edit`)}
                        className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-semibold text-slate-700 mb-2">Description</h2>
                <p className="text-slate-600 whitespace-pre-wrap">{issue.description}</p>
            </div>

            {/* Status */}
            <div className="bg-white p-4 rounded shadow-md flex items-center gap-2">
                <span className="text-sm text-slate-600 font-medium">Status:</span>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(
                        issue.status?.name
                    )}`}
                >
                    {issue.status?.name}
                </span>
            </div>
        </div>
    );
};

export default IssueView;
