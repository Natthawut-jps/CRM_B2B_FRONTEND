import { userRepository } from "@/repositories/user.repository";

export const userService = {
    findById: async (id: string, token: string) => {
        const user = await userRepository.findById(id, token);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    },
};