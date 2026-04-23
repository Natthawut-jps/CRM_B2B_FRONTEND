import { activityRepository } from "@/repositories/activity.repository";
import { CreateActivityDto } from "@/types/activity.type";

export const activityService = {
  
    createActivity: async (dto: CreateActivityDto, token: string) => {
        return activityRepository.create(dto, token);
    }
};