"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollShadow } from "@/components/ui/scroll-shadow";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

type ActivityType = "call" | "email" | "meeting" | "task";
type ActivityStatus = "due" | "planned" | "done";

type LeadActivity = {
  id: string;
  leadName: string;
  company: string;
  type: ActivityType;
  status: ActivityStatus;
  owner?: string;
  due: string;
};

const typeStyles: Record<ActivityType, string> = {
  call: "bg-blue-100 text-blue-800",
  email: "bg-indigo-100 text-indigo-800",
  meeting: "bg-purple-100 text-purple-800",
  task: "bg-slate-100 text-slate-800",
};

const statusStyles: Record<ActivityStatus, string> = {
  due: "bg-red-100 text-red-800",
  planned: "bg-yellow-100 text-yellow-800",
  done: "bg-green-100 text-green-800",
};

const seed: LeadActivity[] = [
  { id: "A-9001", leadName: "John Smith", company: "Tech Corp", type: "call", status: "due", owner: "Sarah", due: "Today 14:00" },
  { id: "A-9002", leadName: "Emily Davis", company: "Marketing Ltd", type: "email", status: "planned", owner: "Mike", due: "Tomorrow" },
  { id: "A-9003", leadName: "Michael Brown", company: "Global Solutions", type: "meeting", status: "planned", owner: "Sarah", due: "Fri 10:30" },
  { id: "A-9004", leadName: "Lisa Anderson", company: "Startup Inc", type: "task", status: "done", owner: "Tom", due: "Yesterday" },
];

export default function Activities() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return seed.filter((a) =>
      a.leadName.toLowerCase().includes(q.toLowerCase()) ||
      a.company.toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Lead Activities</h1>
          <p className="text-sm text-muted-foreground">Calls, emails, and tasks for leads</p>
        </div>
        <Button>New Activity</Button>
      </div>

      <div className="rounded-lg border border-border p-4">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by lead/company..." />
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-base font-medium">Activities</div>
          <div className="text-sm text-muted-foreground">{filtered.length} items</div>
        </div>
        <ScrollShadow>
          <Table className="min-w-[840px]">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Lead</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((a) => (
                <TableRow key={a.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{a.id}</TableCell>
                  <TableCell>
                    <div className="font-medium">{a.leadName}</div>
                    <div className="text-xs text-muted-foreground">{a.company}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(typeStyles[a.type])}>{a.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(statusStyles[a.status])}>{a.status}</Badge>
                  </TableCell>
                  <TableCell>{a.owner ?? "—"}</TableCell>
                  <TableCell>{a.due}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollShadow>
      </div>
    </div>
  );
}