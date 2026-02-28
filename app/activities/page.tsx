
export default function Activities() {
  const items = [
    { title: "Call with Tech Corp", type: "Call", due: "Today 14:00", owner: "Sarah", status: "Due" },
    { title: "Email follow-up: Marketing Ltd", type: "Email", due: "Tomorrow", owner: "Mike", status: "Planned" },
    { title: "Demo: Startup Inc", type: "Meeting", due: "Fri 10:30", owner: "Tom", status: "Planned" },
    { title: "Renewal check-in: Global Solutions", type: "Task", due: "Next week", owner: "Sarah", status: "Backlog" },
  ];

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Activities</h1>
          <p className="text-sm text-muted-foreground">Plan, assign, and track tasks across your pipeline</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 text-sm font-medium">
          Add Activity
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Due Today</div>
          <div className="text-2xl font-semibold mt-1">3</div>
          <div className="text-xs text-muted-foreground mt-1">needs attention</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Planned</div>
          <div className="text-2xl font-semibold mt-1">12</div>
          <div className="text-xs text-muted-foreground mt-1">next 7 days</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Completed</div>
          <div className="text-2xl font-semibold mt-1">28</div>
          <div className="text-xs text-muted-foreground mt-1">this month</div>
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <div className="text-base font-medium">Upcoming</div>
            <div className="text-sm text-muted-foreground">Your next activities</div>
          </div>
          <input className="h-9 w-64 rounded-md border border-border bg-background px-3 text-sm" placeholder="Search activities..." />
        </div>
        <div className="divide-y divide-border">
          {items.map((a) => (
            <div key={a.title} className="p-4 hover:bg-muted/30 transition">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-medium">{a.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {a.type} • {a.owner}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{a.due}</div>
                  <div className="text-xs text-muted-foreground mt-1">{a.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
