import { useState } from "react";
import { Link } from "react-router";

const ShortUrlResult = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const shortId = result?.shortId;

  if (!shortId) {
    return (
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
        URL was created, but the server did not return the short ID.
      </div>
    );
  }

  const shortUrl = `${window.location.origin}/${shortId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="mb-2 text-sm font-medium text-slate-500">
        Your shortened URL
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex min-h-12 flex-1 items-center overflow-hidden rounded-xl bg-slate-50 px-4">
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="truncate text-sm font-medium text-indigo-600 hover:underline"
          >
            {shortUrl}
          </a>
        </div>

        <button
          onClick={handleCopy}
          className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Short ID: {shortId}
        </span>

        <Link
          to={`/analytics/${shortId}`}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          View Analytics →
        </Link>
      </div>
    </div>
  );
};

export default ShortUrlResult;
