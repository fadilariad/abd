export interface ISale {
    name: string
    cost: number;
    quantity: number;
    date: Date;
    delivery: number,
    clientId?: string;
    clientName?: string;
    price?: number;
    invoice: string;
}
