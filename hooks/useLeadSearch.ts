import { Lead } from "@/types/lead.type";
import { useSearch } from "./useSearch";

export function useLeadSearch(q: string, status: string, source: string) {
   return useSearch<Lead>(`/leads?q${q}&status=${status}&source=${source}`, q, status, source)
}