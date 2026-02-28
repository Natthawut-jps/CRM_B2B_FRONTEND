

export default function Companies() {
    return (
        <div className="p-6 space-y-6 w-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Companies</h1>
                    <p className="text-sm text-muted-foreground">Manage your accounts and company records</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-9 px-4 text-sm font-medium">Add Company</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg border border-border p-4">
                    <div className="text-sm text-muted-foreground">Total Companies</div>
                    <div className="text-2xl font-semibold mt-1">128</div>
                    <div className="text-xs text-muted-foreground mt-1">+6% this month</div>
                </div>
                <div className="rounded-lg border border-border p-4">
                    <div className="text-sm text-muted-foreground">Active Accounts</div>
                    <div className="text-2xl font-semibold mt-1">83</div>
                    <div className="text-xs text-muted-foreground mt-1">+3% this month</div>
                </div>
                <div className="rounded-lg border border-border p-4">
                    <div className="text-sm text-muted-foreground">New This Week</div>
                    <div className="text-2xl font-semibold mt-1">9</div>
                    <div className="text-xs text-muted-foreground mt-1">vs 7 last week</div>
                </div>
                <div className="rounded-lg border border-border p-4">
                    <div className="text-sm text-muted-foreground">At Risk</div>
                    <div className="text-2xl font-semibold mt-1">4</div>
                    <div className="text-xs text-muted-foreground mt-1">needs follow up</div>
                </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <div>
                        <div className="text-base font-medium">Company List</div>
                        <div className="text-sm text-muted-foreground">A list of companies in your CRM</div>
                    </div>
                    <input className="h-9 w-40 sm:w-64 rounded-md border border-border bg-background px-3 text-sm" placeholder="Search companies..." />
                </div>
                {/* <> */}
                    <table className="w-full min-w-[720px] text-sm">
                        <thead className="bg-muted/50">
                            <tr className="text-left">
                                <th className="p-3 font-medium">Company</th>
                                <th className="p-3 font-medium">Industry</th>
                                <th className="p-3 font-medium">Owner</th>
                                <th className="p-3 font-medium">Status</th>
                                <th className="p-3 font-medium">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-border hover:bg-muted/30">
                                <td className="p-3">Tech Corp</td>
                                <td className="p-3">Software</td>
                                <td className="p-3">Sarah</td>
                                <td className="p-3">Active</td>
                                <td className="p-3">2026-02-28</td>
                            </tr>
                            <tr className="border-t border-border hover:bg-muted/30">
                                <td className="p-3">Marketing Ltd</td>
                                <td className="p-3">Agency</td>
                                <td className="p-3">Mike</td>
                                <td className="p-3">Active</td>
                                <td className="p-3">2026-02-27</td>
                            </tr>
                            <tr className="border-t border-border hover:bg-muted/30">
                                <td className="p-3">Global Solutions</td>
                                <td className="p-3">Consulting</td>
                                <td className="p-3">Tom</td>
                                <td className="p-3">At Risk</td>
                                <td className="p-3">2026-02-25</td>
                            </tr>
                        </tbody>
                    </table>
                {/* </> */}
            </div>
        </div>
    )
}