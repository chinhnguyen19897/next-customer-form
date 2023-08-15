type Status = 'active' | 'deactivated'

export interface ICustomerInfo {
    id: string;
    code: string;
    fullName: string;
    phoneNumber: string;
    groupCustomer: string;
    debtAmount: number;
    totalAmount: number;
    createdAt: string;
    status: Status;
    quantity: number;
}