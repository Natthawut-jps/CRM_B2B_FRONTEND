import { marketingRepository } from "@/repositories/marketing.repository";
import { CreateMarketingDto } from "@/types/marketing.type";

export const marketingService = {
  
    createMarketing: async (dto: CreateMarketingDto, token: string) => {
        return marketingRepository.create(dto, token);
    }
};