"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
        <>
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
                    <Dialog>
                      <DialogTrigger className="cursor-pointer" asChild>
                        <Button variant="secondary" size="sm">Assign</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-sm">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                          </DialogDescription>
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      </div>
    </div>
  );
}