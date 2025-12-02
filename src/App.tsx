import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueView from "./pages/IssueView";
import IssueForm from "./pages/IssueForm";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/issues" replace />} />
        <Route path="/issues" element={<IssueList />} />
        <Route path="/issues/new" element={<IssueForm mode="create" />} />
        <Route path="/issues/:id/edit" element={<IssueForm mode="edit" />} />
        <Route path="/issues/:id" element={<IssueView />} />
      </Routes>
    </Layout>
  );
};

export default App;
