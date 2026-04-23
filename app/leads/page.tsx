import { Leads } from "@/components/features/leads/leadPage"
import { getToken } from "@/lib/auth";
import { leadService } from "@/services/lead.service"
interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function LeadPage({ searchParams }: Props) {
  const limit = 8;
  const { page } = await searchParams;

  const token = await getToken();
  const leads = await leadService.getLeads(page ? parseInt(page) || 1 : 1, limit, token);
  return <Leads leads={leads.data} total={leads.total} page={leads.page} limit={leads.limit} />
}