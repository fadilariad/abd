export interface IPayment {
    type: EPaymentType;
    amount: number;
    note: string;
    date: Date;
}

export enum EPaymentType {
    CASH = 1,
    CHECK,
    INVOICE,
    ORDER
}