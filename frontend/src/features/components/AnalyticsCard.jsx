const AnalyticsCard = ({ data }) => {
  const totalClicks = data?.totalClicks ?? 0;
  const analytics = data?.analytics ?? [];

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="w-full max-w-3xl">
      {/* Total Clicks */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Total Clicks</p>

        <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          {totalClicks}
        </p>
      </div>

      {/* History */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="font-semibold text-slate-900">Click History</h2>

          <p className="mt-1 text-sm text-slate-500">
            Every recorded visit to your short URL.
          </p>
        </div>

        {analytics.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-slate-500">
            No clicks recorded yet.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {analytics
              .slice()
              .reverse()
              .map((visit, index) => (
                <div
                  key={visit._id || index}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Visit #{analytics.length - index}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {formatDate(visit.timestamp)}
                    </p>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;