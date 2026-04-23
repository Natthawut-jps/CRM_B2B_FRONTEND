import { apiClient } from "@/lib/api-client";

export const userRepository = {
    findById: async (id: string, token: string) => {
        return apiClient.get(`/api/v1/user?id=${id}`, { token });
    },
};