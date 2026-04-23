import { apiClient } from "@/lib/api-client";
import { CreateLeadDto, UpdateLeadDto, LeadsResponse } from "@/types/lead.type";

export const leadRepository = {
    create: async (dto: CreateLeadDto, token: string) => {
        return apiClient.post(`/api/v1/lead`, dto, { token });
    },

    update: async (id: string, dto: UpdateLeadDto, token: string) => {
        return apiClient.put(`/api/v1/lead?id=${id}`, dto, { token });
    },

    findMany: async (token: string, page: number = 1, limit: number = 10) => {
        return apiClient.get<LeadsResponse>(`/api/v1/lead?page=${page}&limit=${limit}`, { token });
    },
};