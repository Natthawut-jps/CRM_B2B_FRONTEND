import { ScrollShadow } from "@/components/ui/scroll-shadow";

export default function Support() {
  const tickets = [
    { id: "SUP-1021", subject: "Can’t import contacts", priority: "High", status: "Open", updated: "2h ago" },
    { id: "SUP-1018", subject: "Billing invoice request", priority: "Medium", status: "Pending", updated: "1d ago" },
    { id: "SUP-1012", subject: "Dashboard chart not loading", priority: "Low", status: "Solved", updated: "3d ago" },
  ];

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Support</h1>
          <p className="text-sm text-muted-foreground">Customer tickets and helpdesk</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 text-sm font-medium">
          New Ticket
        </button>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <div className="text-base font-medium">Tickets</div>
            <div className="text-sm text-muted-foreground">Recent support requests</div>
          </div>
          <input className="h-9 w-40 sm:w-64 rounded-md border border-border bg-background px-3 text-sm" placeholder="Search tickets..." />
        </div>
        <ScrollShadow>
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="p-3 font-medium">Ticket</th>
                <th className="p-3 font-medium">Subject</th>
                <th className="p-3 font-medium">Priority</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} className="border-t border-border hover:bg-muted/30">
                  <td className="p-3 font-medium">{t.id}</td>
                  <td className="p-3">{t.subject}</td>
                  <td className="p-3">{t.priority}</td>
                  <td className="p-3">{t.status}</td>
                  <td className="p-3">{t.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollShadow>
      </div>
    </div>
  );
}
