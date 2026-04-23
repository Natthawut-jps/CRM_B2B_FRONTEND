export interface CreateLeadDto {
    name: string;
    email: string;
    phone: string;
    company: string;
    status: string;
}


export interface UpdateLeadDto {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    status?: string;
}

export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    source: string;
    owner: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export interface LeadsResponse {
  data: Lead[];
  total: number;
  page: number;
  limit: number;
}
