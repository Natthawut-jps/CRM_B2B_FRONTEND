"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

type ContactStatus = "active" | "inactive" | "prospect";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  status: ContactStatus;
  owner?: string;
  lastContact: string;
};

const statusStyles: Record<ContactStatus, string> = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-slate-100 text-slate-800",
  prospect: "bg-blue-100 text-blue-800",
};

const contactsSeed: Contact[] = [
  { id: "C-1001", name: "Sarah Johnson", email: "sarah@techcorp.com", phone: "+66 81-000-0001", company: "Tech Corp", title: "CEO", status: "active", owner: "Mike", lastContact: "2026-02-28" },
  { id: "C-1002", name: "Michael Chen", email: "michael@marketingltd.com", phone: "+66 81-000-0002", company: "Marketing Ltd", title: "Head of Growth", status: "prospect", owner: "Sarah", lastContact: "2026-02-27" },
  { id: "C-1003", name: "Emily Davis", email: "emily@globalsolutions.com", phone: "+66 81-000-0003", company: "Global Solutions", title: "Procurement", status: "active", owner: "Sarah", lastContact: "2026-02-25" },
  { id: "C-1004", name: "David Wilson", email: "david@startup.io", phone: "+66 81-000-0004", company: "Startup Inc", title: "CTO", status: "inactive", owner: "Tom", lastContact: "2026-02-20" },
];

export default function Contacts() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | ContactStatus>("all");
  const [owner, setOwner] = useState<"all" | string>("all");

  const handleStatusChange = (v: string) => {
    if (v === "all" || v === "active" || v === "inactive" || v === "prospect") {
      setStatus(v);
    }
  };

  const handleOwnerChange = (v: string) => {
    setOwner(v);
  };

  const owners = useMemo(() => {
    const set = new Set<string>();
    contactsSeed.forEach((c) => c.owner && set.add(c.owner));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    return contactsSeed.filter((c) => {
      const matchesQ =
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.company.toLowerCase().includes(q.toLowerCase()) ||
        c.email.toLowerCase().includes(q.toLowerCase());
      const matchesStatus = status === "all" || c.status === status;
      const matchesOwner = owner === "all" || c.owner === owner;
      return matchesQ && matchesStatus && matchesOwner;
    });
  }, [owner, q, status]);

  const stats = useMemo(() => {
    const total = contactsSeed.length;
    const active = contactsSeed.filter((c) => c.status === "active").length;
    const prospects = contactsSeed.filter((c) => c.status === "prospect").length;
    const inactive = contactsSeed.filter((c) => c.status === "inactive").length;
    return { total, active, prospects, inactive };
  }, []);

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Contacts</h1>
          <p className="text-sm text-muted-foreground">People you interact with across accounts</p>
        </div>
        <Button>Add Contact</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Total Contacts</div>
          <div className="text-2xl font-semibold mt-1">{stats.total}</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Active</div>
          <div className="text-2xl font-semibold mt-1">{stats.active}</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Prospects</div>
          <div className="text-2xl font-semibold mt-1">{stats.prospects}</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Inactive</div>
          <div className="text-2xl font-semibold mt-1">{stats.inactive}</div>
        </div>
      </div>

      <div className="rounded-lg border border-border p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, company, email..." />
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-full md:w-52">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="prospect">Prospect</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select value={owner} onValueChange={handleOwnerChange}>
            <SelectTrigger className="w-full md:w-52">
              <SelectValue placeholder="Owner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Owners</SelectItem>
              {owners.map((o) => (
                <SelectItem key={o} value={o}>{o}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-base font-medium">Contact List</div>
          <div className="text-sm text-muted-foreground">{filtered.length} results</div>
        </div>
        <>
          <Table className="min-w-[700px] lg:min-w-[800px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead className="w-[80px]">Owner</TableHead>
                <TableHead className="w-[100px]">Last Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{c.id}</TableCell>
                  <TableCell>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.email}</div>
                    <div className="text-xs text-muted-foreground hidden sm:block">{c.phone}</div>
                  </TableCell>
                  <TableCell>{c.company}</TableCell>
                  <TableCell>
                    <Badge className={cn(statusStyles[c.status])}>{c.status}</Badge>
                  </TableCell>
                  <TableCell>{c.owner ?? "—"}</TableCell>
                  <TableCell>{c.lastContact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      </div>
    </div>
  );
}