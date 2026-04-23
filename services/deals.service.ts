import { dealsRepository } from "@/repositories/deals.repository";
import { CreateDealDto } from "@/types/deals.type";

export const dealsService = {
  createDeal: async (dto: CreateDealDto, token: string) => {
    return dealsRepository.create(dto, token);
  },
};
