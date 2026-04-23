import { companyRepository } from "@/repositories/company.repository";
import { CreateCompanyDto } from "@/types/company.type";

export const companyService = {

    createCompany: async (dto: CreateCompanyDto, token: string) => {
        return companyRepository.create(dto, token);
    },
};
