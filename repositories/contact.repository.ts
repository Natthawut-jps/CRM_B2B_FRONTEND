import { apiClient } from "@/lib/api-client";

export const contactRepository = {

    create: async (dto: any, token: string) => {
        return apiClient.post(`/api/v1/contact`, dto, { token });
    },
};
