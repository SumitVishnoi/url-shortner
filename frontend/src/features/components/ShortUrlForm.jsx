import { useState } from "react";
import { generateShortUrl } from "../services/url.api";
import ShortUrlResult from "./ShortUrlResult";

const ShortUrlForm = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateShortUrl(url.trim());

      setResult(data);
      setUrl("");
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your long URL here..."
            disabled={loading}
            className="h-14 flex-1 rounded-xl border border-slate-300 bg-white px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-50"
          />

          <button
            type="submit"
            disabled={loading}
            className="h-14 rounded-xl bg-indigo-600 px-7 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {result && <ShortUrlResult result={result} />}
    </div>
  );
};

export default ShortUrlForm;