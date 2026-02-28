
export default function Marketing() {
  const campaigns = [
    { name: "Q1 Email Nurture", status: "Running", reach: "12,450", conv: "2.8%" },
    { name: "Webinar: CRM Best Practices", status: "Planned", reach: "4,120", conv: "—" },
    { name: "LinkedIn Ads", status: "Paused", reach: "18,300", conv: "1.4%" },
  ];

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Marketing</h1>
          <p className="text-sm text-muted-foreground">Campaigns, audiences, and performance</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 text-sm font-medium">
          New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((c) => (
          <div key={c.name} className="rounded-lg border border-border p-4 hover:bg-muted/30 transition">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-sm text-muted-foreground mt-1">Status: {c.status}</div>
              </div>
              <button className="h-8 px-3 rounded-md border border-border text-sm">View</button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-border p-3">
                <div className="text-xs text-muted-foreground">Reach</div>
                <div className="text-lg font-semibold">{c.reach}</div>
              </div>
              <div className="rounded-md border border-border p-3">
                <div className="text-xs text-muted-foreground">Conversion</div>
                <div className="text-lg font-semibold">{c.conv}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
