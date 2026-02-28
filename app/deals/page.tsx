
export default function Deals() {
  const columns = [
    { key: "new", title: "New", count: 6 },
    { key: "qualified", title: "Qualified", count: 4 },
    { key: "proposal", title: "Proposal", count: 3 },
    { key: "won", title: "Won", count: 2 },
  ] as const;

  const cards = [
    { title: "Tech Corp", value: "$50,000", owner: "Sarah", stage: "Qualified" },
    { title: "Marketing Ltd", value: "$18,000", owner: "Mike", stage: "Proposal" },
    { title: "Startup Inc", value: "$7,500", owner: "Tom", stage: "New" },
  ];

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Deals</h1>
          <p className="text-sm text-muted-foreground">Track your pipeline and revenue</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 text-sm font-medium">
          New Deal
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Open Deals</div>
          <div className="text-2xl font-semibold mt-1">15</div>
          <div className="text-xs text-muted-foreground mt-1">+2 this week</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Pipeline Value</div>
          <div className="text-2xl font-semibold mt-1">$245,000</div>
          <div className="text-xs text-muted-foreground mt-1">forecasted</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Won (MTD)</div>
          <div className="text-2xl font-semibold mt-1">$68,000</div>
          <div className="text-xs text-muted-foreground mt-1">+11% vs last month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {columns.map((c) => (
          <div key={c.key} className="rounded-lg border border-border bg-background">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="font-medium">{c.title}</div>
              <div className="text-xs text-muted-foreground">{c.count}</div>
            </div>
            <div className="p-3 space-y-3">
              {cards
                .filter((x) => x.stage === c.title)
                .map((deal) => (
                  <div key={deal.title} className="rounded-md border border-border p-3 hover:bg-muted/30 transition">
                    <div className="font-medium">{deal.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{deal.value}</div>
                    <div className="text-xs text-muted-foreground mt-2">Owner: {deal.owner}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
