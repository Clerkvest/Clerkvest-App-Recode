export interface IProject {
    id?: number;
    employeeId?: number;
    companyId?: number;
    link?: string;
    title?: string;
    description?: string;
    goal?: number;
    investedIn?: number;
    reached?: boolean;
    image?: number;
    createdAt?: Date;
    fundedAt?: Date;
}
