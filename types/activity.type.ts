export interface CreateActivityDto {
    title: string;
    description: string;
    type: string;
    priority: string;
    dueDate: string;
    companyId: string;
    leadId: string;
    notes: string;
}