import { contactRepository } from "@/repositories/contact.repository";
import { CreateContactDto } from "@/types/contact.type";

export const contactService = {
  
    createContact: async (dto: CreateContactDto, token: string) => {
        return contactRepository.create(dto, token);
    },
};