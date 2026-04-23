export interface CreateDealDto {
    name: string;
    value: number;
    stage: string;
    probability: number;
    closeDate: string;
    companyId: string;
    leadId: string;
    notes: string;
}
