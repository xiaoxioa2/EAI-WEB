"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';
import {
  Table,
  Users,
  Search,
  Filter,
  Download,
  Eye,
  X,
  Lock,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

interface Submission {
  id: string;
  name: string;
  type: "founder" | "investor" | "expert";
  email: string;
  url: string;
  company_info: string;
  job_role: string;
  company_segment: string;
  company_segment_other: string;
  purpose: string;
  other: string;
  created_at: string;
  updated_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    filterSubmissions();
  }, [searchTerm, typeFilter, submissions]);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("founders_network_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterSubmissions = () => {
    let filtered = [...submissions];

    if (searchTerm) {
      filtered = filtered.filter(
        (sub) =>
          sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.company_info.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter((sub) => sub.type === typeFilter);
    }

    setFilteredSubmissions(filtered);
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Type",
      "Email",
      "URL",
      "Job Role",
      "Company Segment",
      "Company Info",
      "Purpose",
      "Other",
      "Submitted At",
    ];

    const rows = filteredSubmissions.map((sub) => [
      sub.name,
      sub.type,
      sub.email,
      sub.url,
      sub.job_role,
      sub.company_segment === "Other" ? sub.company_segment_other : sub.company_segment,
      sub.company_info,
      sub.purpose,
      sub.other,
      new Date(sub.created_at).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `founders-network-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Admin Access
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Enter password to view submissions
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              {authError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                  {authError}
                </div>
              )}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 text-white px-4 py-3 font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="w-10 h-10 text-blue-600" />
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Manage Founders Network submissions
              </p>
            </div>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold text-lg">
                    {filteredSubmissions.length} Submissions
                  </span>
                </div>
              </div>
              <button
                onClick={exportToCSV}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="all">All Types</option>
                  <option value="founder">Founders</option>
                  <option value="investor">Investors</option>
                  <option value="expert">Experts</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="text-center py-12">
                <Table className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">No submissions found</p>
                <p className="text-gray-500 text-sm mt-1">
                  {searchTerm || typeFilter !== "all"
                    ? "Try adjusting your filters"
                    : "Submissions will appear here"}
                </p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Job Role
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <tr
                      key={submission.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {submission.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            submission.type === "founder"
                              ? "bg-blue-100 text-blue-800"
                              : submission.type === "investor"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {submission.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {submission.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {submission.job_role || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Submission Details</h2>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <p className="text-gray-900">{selectedSubmission.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Type
                  </label>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      selectedSubmission.type === "founder"
                        ? "bg-blue-100 text-blue-800"
                        : selectedSubmission.type === "investor"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {selectedSubmission.type}
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <a
                    href={`mailto:${selectedSubmission.email}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {selectedSubmission.email}
                  </a>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Website / LinkedIn
                  </label>
                  {selectedSubmission.url ? (
                    <a
                      href={selectedSubmission.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                    >
                      {selectedSubmission.url}
                    </a>
                  ) : (
                    <p className="text-gray-500">Not provided</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Job Role
                </label>
                <p className="text-gray-900">
                  {selectedSubmission.job_role || "Not provided"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Company Segment
                </label>
                <p className="text-gray-900">
                  {selectedSubmission.company_segment === "Other"
                    ? selectedSubmission.company_segment_other || "Not specified"
                    : selectedSubmission.company_segment || "Not provided"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Company Information
                </label>
                <p className="text-gray-900 whitespace-pre-wrap">
                  {selectedSubmission.company_info || "Not provided"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Purpose for Joining
                </label>
                <p className="text-gray-900 whitespace-pre-wrap">
                  {selectedSubmission.purpose}
                </p>
              </div>

              {selectedSubmission.other && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <p className="text-gray-900 whitespace-pre-wrap">
                    {selectedSubmission.other}
                  </p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Submitted At
                  </label>
                  <p className="text-gray-900">
                    {new Date(selectedSubmission.created_at).toLocaleString()}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Last Updated
                  </label>
                  <p className="text-gray-900">
                    {new Date(selectedSubmission.updated_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
