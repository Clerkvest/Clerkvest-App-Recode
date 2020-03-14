export interface IProjectImage {
    id?: number;
    employeeId?: number;
    companyId?: number;
    link?: string;
    title?: string;
    description?: string;
    goal?: number;
    investedIn?: number;
    reached?: boolean;
    image?: string;
    createdAt?: Date;
    fundedAt?: Date;
}
