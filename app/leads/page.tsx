"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import { use, useEffect, useMemo, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { data } from "../dashboard/(components)/card-analyze";

type LeadStatus = "new" | "contacted" | "qualified" | "lost";

type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  source: "Website" | "LinkedIn" | "Referral" | "Cold Email";
  status: LeadStatus;
  owner?: string;
  createdAt: string;
};

const statusStyles: Record<LeadStatus, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  lost: "bg-red-100 text-red-800",
};

const leadsSeed: Lead[] = [
  { id: "L-1001", name: "John Smith", company: "Tech Corp", email: "john@techcorp.com", source: "Website", status: "new", owner: "Sarah", createdAt: "2026-02-28" },
  { id: "L-1002", name: "Emily Davis", company: "Marketing Ltd", email: "emily@marketing.com", source: "LinkedIn", status: "contacted", owner: "Mike", createdAt: "2026-02-27" },
  { id: "L-1003", name: "Michael Brown", company: "Global Solutions", email: "michael@global.com", source: "Referral", status: "qualified", owner: "Sarah", createdAt: "2026-02-25" },
  { id: "L-1004", name: "Lisa Anderson", company: "Startup Inc", email: "lisa@startup.io", source: "Cold Email", status: "lost", owner: "Tom", createdAt: "2026-02-22" },
];

export function useDebounce<T>(value: T, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default function Leads() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | LeadStatus>("all");
  const [source, setSource] = useState<"all" | Lead["source"]>("all");
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const debouncedQ = useDebounce(q, 400);

  const handleStatusChange = (v: string) => {
    if (v === "all" || v === "new" || v === "contacted" || v === "qualified" || v === "lost") {
      setStatus(v);
    }
  };

  const handleSourceChange = (v: string) => {
    if (v === "all" || v === "Website" || v === "LinkedIn" || v === "Referral" || v === "Cold Email") {
      setSource(v);
    }
  };

  const filtered = useMemo(() => {
    return leadsSeed.filter((l) => {
      const matchesQ =
        l.name.toLowerCase().includes(q.toLowerCase()) ||
        l.company.toLowerCase().includes(q.toLowerCase()) ||
        l.email.toLowerCase().includes(q.toLowerCase());
      const matchesStatus = status === "all" || l.status === status;
      const matchesSource = source === "all" || l.source === source;
      return matchesQ && matchesStatus && matchesSource;
    });
  }, [q, source, status]);

  const stats = useMemo(() => {
    const total = leadsSeed.length;
    const newCount = leadsSeed.filter((l) => l.status === "new").length;
    const qualified = leadsSeed.filter((l) => l.status === "qualified").length;
    const lost = leadsSeed.filter((l) => l.status === "lost").length;
    return { total, newCount, qualified, lost };
  }, []);

  // useEffect(() => {
  //   if (q && q.trim().length < 2) {
  //     setLeads([]);
  //     setTotal(0);
  //     return;
  //   }
  //   const controller = new AbortController();
  //   const fetchData = async () => {
  //     try {

  //       setLoading(true);

  //       const param = new URLSearchParams({
  //         q: debouncedQ,
  //         status,
  //         source,
  //         page: page.toString(),
  //         limit: limit.toString(),
  //       });
  //       const response = await fetch(`/api/leads?${param}`, { signal: controller.signal });

  //       if (!response.ok) throw new Error("Failed to fetch");

  //       const data = await response.json();

  //       setLeads(data.leads);
  //       setTotal(data.total);
  //     } catch (error) {
  //       console.error("Failed to fetch leads:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //     controller.abort();
  //   };
  // }, [debouncedQ, status, source, page]);

  // useEffect(() => {
  //   setPage(1);
  // }, [debouncedQ, status, source])
  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Leads</h1>
          <p className="text-sm text-muted-foreground">Capture, qualify, and convert prospects</p>
        </div>
        <Dialog>
          <DialogTrigger className="cursor-pointer" asChild>
            <Button>Add Lead</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Lead</DialogTitle>
            </DialogHeader>
            <form className="w-full max-w-sm">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="form-name">Name</FieldLabel>
                  <Input
                    id="form-name"
                    type="text"
                    placeholder="Evil Rabbit"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-email">Email</FieldLabel>
                  <Input id="form-email" type="email" placeholder="john@example.com" />
                  <FieldDescription>
                    We&apos;ll never share your email with anyone.
                  </FieldDescription>
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                    <Input id="form-phone" type="tel" placeholder="0123456789" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="form-country">Country</FieldLabel>
                    <Select defaultValue="us">
                      <SelectTrigger id="form-country">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="form-address">Address</FieldLabel>
                  <Input id="form-address" type="text" placeholder="123 Main St" />
                </Field>
                <Field orientation="horizontal">
                  <DialogClose className="cursor-pointer" asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button className="cursor-pointer" type="submit">Submit</Button>
                </Field>
              </FieldGroup>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Total Leads</div>
          <div className="text-2xl font-semibold mt-1">{stats.total}</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">New</div>
          <div className="text-2xl font-semibold mt-1">{stats.newCount}</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Qualified</div>
          <div className="text-2xl font-semibold mt-1">{stats.qualified}</div>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="text-sm text-muted-foreground">Lost</div>
          <div className="text-2xl font-semibold mt-1">{stats.lost}</div>
        </div>
      </div>

      <div className="rounded-lg border border-border p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, company, email..." />
          {q && q.length > 0 && q.length < 2 && (
            <p className="text-[10px] text-gray-500">
              Type at least two characters to search.
            </p>
          )}
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-full md:w-52">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
          </Select>
          <Select value={source} onValueChange={handleSourceChange}>
            <SelectTrigger className="w-full md:w-52">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="Website">Website</SelectItem>
              <SelectItem value="LinkedIn">LinkedIn</SelectItem>
              <SelectItem value="Referral">Referral</SelectItem>
              <SelectItem value="Cold Email">Cold Email</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <div className="text-base font-medium">All Leads</div>
            <div className="text-sm text-muted-foreground">{filtered.length} results</div>
          </div>
        </div>
        <>
          <Table className="min-w-[550px] lg:min-w-[650px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="hidden md:table-cell">Source</TableHead>
                <TableHead className="w-[80px]">Owner</TableHead>
                <TableHead className="w-[100px]">Created</TableHead>
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
                  <TableCell className="hidden md:table-cell">{l.source}</TableCell>
                  <TableCell>{l.owner ?? "—"}</TableCell>
                  <TableCell>{l.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      </div>
    </div>
  );
}