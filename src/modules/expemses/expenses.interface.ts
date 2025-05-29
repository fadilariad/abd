export interface IExpenses {
    type: ExpensesType;
    amount: number;
    note: string;
    date: Date;
}

export enum ExpensesType {
    GAS = 1,
    HOME,
    OTHERS,
}