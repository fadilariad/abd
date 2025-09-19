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

export interface IAddSale extends ISale {
    id: string;
}

export interface IConvertOrderToInvoicePayload {
    order: string;
    invoice: string;
}