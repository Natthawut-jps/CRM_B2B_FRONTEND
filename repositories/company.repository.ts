import { apiClient } from "@/lib/api-client";
import { CreateCompanyDto } from "@/types/company.type";

export const companyRepository = {
  create: async (dto: CreateCompanyDto, token: string) => {
    return apiClient.post(`/api/v1/company`, dto, { token });
  },
};