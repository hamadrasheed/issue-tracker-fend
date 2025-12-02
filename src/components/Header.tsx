import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 md:px-0 gap-3 md:gap-0">
        {/* Logo / Title */}
        <Link
          to="/issues"
          className="text-2xl font-bold text-slate-900 hover:text-sky-600 transition-colors"
        >
          Issue Tracker
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-3">
          <Link
            to="/issues"
            className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
          >
            Issues
          </Link>
          <Link
            to="/issues/new"
            className="text-sm font-medium rounded px-3 py-1 bg-sky-600 text-white hover:bg-sky-700 transition"
          >
            New Issue
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
