"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollShadow } from "@/components/ui/scroll-shadow";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

type LeadStatus = "new" | "contacted" | "qualified" | "lost";
type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  status: LeadStatus;
  owner: string;
  createdAt: string;
};

const statusStyles: Record<LeadStatus, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  lost: "bg-red-100 text-red-800",
};

const currentOwner = "Sarah";

const leadsSeed: Lead[] = [
  { id: "L-2001", name: "John Smith", company: "Tech Corp", email: "john@techcorp.com", status: "new", owner: "Sarah", createdAt: "2026-02-28" },
  { id: "L-2002", name: "Michael Brown", company: "Global Solutions", email: "michael@global.com", status: "qualified", owner: "Sarah", createdAt: "2026-02-25" },
  { id: "L-2003", name: "Emily Davis", company: "Marketing Ltd", email: "emily@marketing.com", status: "contacted", owner: "Mike", createdAt: "2026-02-27" },
];

export default function Ownerlead() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return leadsSeed
      .filter((l) => l.owner === currentOwner)
      .filter((l) =>
        l.name.toLowerCase().includes(q.toLowerCase()) ||
        l.company.toLowerCase().includes(q.toLowerCase()) ||
        l.email.toLowerCase().includes(q.toLowerCase())
      );
  }, [q]);

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">My Leads</h1>
          <p className="text-sm text-muted-foreground">Leads assigned to you ({currentOwner})</p>
        </div>
        <Button>Add Lead</Button>
      </div>

      <div className="rounded-lg border border-border p-4">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search my leads..." />
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-base font-medium">Results</div>
          <div className="text-sm text-muted-foreground">{filtered.length} leads</div>
        </div>
        <ScrollShadow>
          <Table className="min-w-[720px]">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((l) => (
                <TableRow key={l.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{l.id}</TableCell>
                  <TableCell>
                    <div className="font-medium">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.email}</div>
                  </TableCell>
                  <TableCell>{l.company}</TableCell>
                  <TableCell>
                    <Badge className={cn(statusStyles[l.status])}>{l.status}</Badge>
                  </TableCell>
                  <TableCell>{l.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollShadow>
      </div>
    </div>
  );
}