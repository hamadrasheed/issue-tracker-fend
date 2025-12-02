import React from "react";
import type { Issue } from "../types/issues.types";
import { Link } from "react-router-dom";
import { statusBadge } from "../constant/constants";

const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row justify-between gap-4">
      {/* Left section */}
      <div className="flex-1">
        <Link
          to={`/issues/${issue.id}`}
          className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors"
        >
          {issue.title}
        </Link>
        <p className="text-sm text-slate-600 mt-2 line-clamp-3">
          {issue.description}
        </p>
        <p className="text-xs text-slate-400 mt-2">
          Last updated: {new Date(issue.updated_at).toLocaleString()}
        </p>
      </div>

      {/* Right section */}
      <div className="flex flex-col items-start md:items-end gap-2">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(
            issue.status?.slug
          )}`}
        >
          {issue.status?.name}
        </span>
        <Link
          to={`/issues/${issue.id}/edit`}
          className="text-sm text-sky-600 hover:text-sky-800 transition-colors mt-1"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default IssueCard;
