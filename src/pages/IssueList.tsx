import React, { useEffect, useState } from "react";
import client from "../api/client";
import type { Issue } from "../types/issues.types";
import IssueCard from "../components/IssueCard";
import { Link } from "react-router-dom";

const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIssues = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const res: any = await client.get<Issue[]>("/issues");
      setIssues(res.data.result.data);
    } catch (err) {
      console.log("err", err);
      setError("Failed to load issues");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900">Issues</h1>
        <Link
          to="/issues/new"
          className="px-5 py-2 bg-sky-600 text-white font-semibold rounded hover:bg-sky-700 transition"
        >
          Create Issue
        </Link>
      </div>

      {/* Status messages */}
      {loading && <div className="text-center py-10">Loading…</div>}
      {error && <div className="text-center text-red-600 py-10">{error}</div>}
      {!loading && issues.length === 0 && !error && (
        <div className="text-center text-slate-600 py-10">No issues yet.</div>
      )}

      {/* Issue grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssueList;
