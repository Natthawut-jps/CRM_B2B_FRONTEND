import { leadRepository } from "@/repositories/lead.repository";
import { CreateLeadDto, UpdateLeadDto } from "@/types/lead.type";

export const leadService = {
    createLead: async (dto: CreateLeadDto, token: string) => {
       return leadRepository.create(dto, token);
    },

    assignLead: async (id: string, dto: UpdateLeadDto, token: string) => {
        return leadRepository.update(id, dto, token);
    },

    getLeads: async (page: number = 1, limit: number = 10, token: string) => {
        return leadRepository.findMany(token, page, limit);
    },
}
