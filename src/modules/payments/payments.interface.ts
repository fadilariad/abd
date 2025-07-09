export interface IPayment {
    type: EPaymentType;
    amount: number;
    note: string;
    date: Date;
    clientId?: string;
    clientName?: string;
}

export enum EPaymentType {
    CASH = 1,
    CHECK,
    INVOICE,
    ORDER
}