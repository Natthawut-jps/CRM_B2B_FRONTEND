import { apiClient } from "@/lib/api-client";
import { CreateActivityDto } from "@/types/activity.type";

export const activityRepository = {
  create: async (dto: CreateActivityDto, token: string) => {
    return apiClient.post(`/api/v1/activity`, dto, { token });
  },
};
