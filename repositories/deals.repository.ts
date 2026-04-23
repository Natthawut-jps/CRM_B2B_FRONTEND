import { apiClient } from "@/lib/api-client";
import { CreateDealDto } from "@/types/deals.type";

export const dealsRepository = {
  create: async (dto: CreateDealDto, token: string) => {
    return apiClient.post(`/api/v1/deal`, dto, { token });
  },
};
