import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function TableDashboad() {
  return (
    <>
      <div className="rounded-lg border border-border overflow-hidden bg-background">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <div className="text-base font-medium">Recent Invoices</div>
            <div className="text-sm text-muted-foreground">Latest transactions and payment status</div>
          </div>
          <div className="text-sm text-muted-foreground">{`page ${2} of ${10}`}</div>
        </div>

        <>
          <Table className="min-w-[640px]">
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead className="w-[120px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice, idx) => {
                const statusVariant =
                  invoice.paymentStatus === "Paid"
                    ? "bg-green-100 text-green-800"
                    : invoice.paymentStatus === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800";

                return (
                  <TableRow
                    key={invoice.invoice}
                    className={cn(
                      "transition-colors",
                      idx % 2 === 0 ? "bg-background" : "bg-muted/20",
                      "hover:bg-muted/40"
                    )}
                  >
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>
                      <Badge className={statusVariant}>{invoice.paymentStatus}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right font-medium tabular-nums">{invoice.totalAmount}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </>

        <div className="flex items-center justify-end gap-3 w-full box-border p-4 border-t border-border">
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink isActive size={"icon-sm"} className="opacity-50 cursor-not-allowed">
                  <ChevronsLeftIcon />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive size={"icon-sm"} className="opacity-50 cursor-not-allowed">
                  <ChevronLeftIcon />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive size={"icon-sm"}>
                  <ChevronRightIcon />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive size={"icon-sm"}>
                  <ChevronsRightIcon />
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>

  )
}
