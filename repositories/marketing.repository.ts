import { apiClient } from "@/lib/api-client";
import { CreateMarketingDto } from "@/types/marketing.type";

export const marketingRepository = {
  
    create: async (dto: CreateMarketingDto, token: string) => {
        return apiClient.post(`/api/v1/marketing`, dto, { token });
    }
};