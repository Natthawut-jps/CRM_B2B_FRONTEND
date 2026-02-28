

export default function Reports() {
  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-sm text-muted-foreground">Analytics & performance overview</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 text-sm font-medium">
          Export
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Leads</div>
          <div className="text-2xl font-semibold mt-1">1,234</div>
          <div className="text-xs text-muted-foreground mt-1">+12% MoM</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Deals Won</div>
          <div className="text-2xl font-semibold mt-1">48</div>
          <div className="text-xs text-muted-foreground mt-1">+7% MoM</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Revenue</div>
          <div className="text-2xl font-semibold mt-1">$168k</div>
          <div className="text-xs text-muted-foreground mt-1">+11% MoM</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Conversion</div>
          <div className="text-2xl font-semibold mt-1">23%</div>
          <div className="text-xs text-muted-foreground mt-1">+2% MoM</div>
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-base font-medium">Top Sources</div>
          <div className="text-sm text-muted-foreground">Where your leads come from</div>
        </div>
        <>
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="p-3 font-medium">Source</th>
                <th className="p-3 font-medium">Leads</th>
                <th className="p-3 font-medium">Qualified</th>
                <th className="p-3 font-medium">Won</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border hover:bg-muted/30">
                <td className="p-3">Website</td>
                <td className="p-3">420</td>
                <td className="p-3">98</td>
                <td className="p-3">21</td>
              </tr>
              <tr className="border-t border-border hover:bg-muted/30">
                <td className="p-3">LinkedIn</td>
                <td className="p-3">310</td>
                <td className="p-3">67</td>
                <td className="p-3">14</td>
              </tr>
              <tr className="border-t border-border hover:bg-muted/30">
                <td className="p-3">Referral</td>
                <td className="p-3">190</td>
                <td className="p-3">55</td>
                <td className="p-3">10</td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}
