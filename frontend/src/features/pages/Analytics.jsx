import { useState } from "react";
import { getAnalytics } from "../services/url.api";
import AnalyticsCard from "../components/AnalyticsCard";
import Loading from "../components/Loading";

const Analytics = () => {
  const [shortId, setShortId] = useState("");
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setData(null);

    if (!shortId.trim()) {
      setError("Please enter a short ID.");
      return;
    }

    try {
      setLoading(true);

      const result = await getAnalytics(shortId.trim());

      setData(result);
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Unable to fetch analytics. Please check the short ID."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-81px)] bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Analytics
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Track your short URL
            </h1>

            <p className="mt-4 text-slate-500">
              Enter your short ID to see how many times your URL has been
              visited.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={shortId}
                onChange={(e) => setShortId(e.target.value)}
                placeholder="Enter short ID e.g. Ab12Cd"
                disabled={loading}
                className="h-14 flex-1 rounded-xl border border-slate-300 bg-white px-5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <button
                type="submit"
                disabled={loading}
                className="h-14 rounded-xl bg-indigo-600 px-7 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Loading..." : "View Analytics"}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {loading && <Loading text="Fetching analytics..." />}

          {data && !loading && (
            <div className="mt-8">
              <AnalyticsCard data={data} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Analytics;