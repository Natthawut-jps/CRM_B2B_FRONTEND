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
  createdAt: string;
};

const statusStyles: Record<LeadStatus, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  lost: "bg-red-100 text-red-800",
};

const leadsSeed: Lead[] = [
  { id: "L-3001", name: "Alex Carter", company: "Fintech Co", email: "alex@fintech.com", status: "new", createdAt: "2026-02-28" },
  { id: "L-3002", name: "Nina Patel", company: "Retail Group", email: "nina@retail.com", status: "contacted", createdAt: "2026-02-27" },
  { id: "L-3003", name: "Omar Khan", company: "Logistics Ltd", email: "omar@logistics.com", status: "qualified", createdAt: "2026-02-25" },
];

export default function Unassigned() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return leadsSeed.filter((l) =>
      l.name.toLowerCase().includes(q.toLowerCase()) ||
      l.company.toLowerCase().includes(q.toLowerCase()) ||
      l.email.toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Unassigned Leads</h1>
          <p className="text-sm text-muted-foreground">Leads waiting to be assigned to an owner</p>
        </div>
        <Button>Bulk Assign</Button>
      </div>

      <div className="rounded-lg border border-border p-4">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search unassigned leads..." />
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-base font-medium">Results</div>
          <div className="text-sm text-muted-foreground">{filtered.length} leads</div>
        </div>
        <ScrollShadow>
          <Table className="min-w-[840px]">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Action</TableHead>
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
                  <TableCell className="text-right">
                    <Button variant="secondary" size="sm">Assign</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollShadow>
      </div>
    </div>
  );
}