"use client";

import { useState, useEffect, useCallback } from "react";
import { Conversation, ChatMessage } from "@/lib/types";

type FilterType = "all" | "qualified" | "rejected" | "in_progress";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchConversations = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = filter !== "all" ? `?filter=${filter}` : "";
      const res = await fetch(`/api/admin/conversations${params}`);
      if (res.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      const data = await res.json();
      setConversations(data.conversations || []);
    } catch {
      console.error("Failed to fetch conversations");
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchConversations();
    }
  }, [isAuthenticated, filter, fetchConversations]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Login failed");
    }
  };

  const getStatus = (conv: Conversation): string => {
    if (conv.rejected_reason) return "Rejected";
    if (conv.is_qualified) return "Qualified";
    return "In Progress";
  };

  const getStatusColor = (conv: Conversation): string => {
    if (conv.rejected_reason)
      return "bg-red-100 text-red-700";
    if (conv.is_qualified)
      return "bg-green-100 text-green-700";
    return "bg-yellow-100 text-yellow-700";
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("tr-TR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900">TONLA Admin</h1>
            <p className="text-sm text-slate-500 mt-1">
              Enter password to access dashboard
            </p>
          </div>
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400 mb-4"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-xs mb-4">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-medium text-sm"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">TONLA Admin</h1>
            <p className="text-xs text-slate-500">Conversation Dashboard</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-2 mb-6">
          {(
            [
              { key: "all", label: "All" },
              { key: "qualified", label: "Qualified" },
              { key: "rejected", label: "Rejected" },
              { key: "in_progress", label: "In Progress" },
            ] as { key: FilterType; label: string }[]
          ).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === key
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={fetchConversations}
            className="ml-auto px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-all"
          >
            Refresh
          </button>
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="text-center py-12 text-slate-500">Loading...</div>
        ) : conversations.length === 0 ? (
          <div className="text-center py-12 text-slate-500 bg-white rounded-2xl border border-slate-200">
            No conversations found
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Industry
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Volume
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {conversations.map((conv) => (
                  <>
                    <tr
                      key={conv.id}
                      onClick={() =>
                        setExpandedId(
                          expandedId === conv.id ? null : conv.id
                        )
                      }
                      className="border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {formatDate(conv.created_at)}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                        {conv.company_name || "—"}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {conv.industry || "—"}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {conv.monthly_volume || "—"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(conv)}`}
                        >
                          {getStatus(conv)}
                        </span>
                      </td>
                    </tr>
                    {expandedId === conv.id && (
                      <tr key={`${conv.id}-expanded`}>
                        <td colSpan={5} className="px-6 py-4 bg-slate-50">
                          <div className="max-w-2xl">
                            <h4 className="text-sm font-medium text-slate-900 mb-3">
                              Chat History
                            </h4>
                            <div className="space-y-2">
                              {(conv.messages as ChatMessage[]).map(
                                (msg, i) => (
                                  <div
                                    key={i}
                                    className={`p-3 rounded-xl text-sm ${
                                      msg.role === "user"
                                        ? "bg-slate-200 text-slate-800 ml-8"
                                        : "bg-white text-slate-700 mr-8 border border-slate-200"
                                    }`}
                                  >
                                    <span className="text-xs font-medium text-slate-500 block mb-1">
                                      {msg.role === "user"
                                        ? "User"
                                        : "TONLA Assistant"}
                                    </span>
                                    {msg.content}
                                  </div>
                                )
                              )}
                            </div>
                            {conv.rejected_reason && (
                              <p className="mt-3 text-xs text-red-600">
                                Rejected: keyword &ldquo;{conv.rejected_reason}&rdquo;
                                detected
                              </p>
                            )}
                            {conv.contact_info && (
                              <p className="mt-2 text-xs text-slate-500">
                                Contact: {conv.contact_info}
                              </p>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
