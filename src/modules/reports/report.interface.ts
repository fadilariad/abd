export type IReport = Record<ReportKey, IReportValue>;
export type ReportKey = 'sales' | 'gas' | 'home' | 'others' | 'cash' | 'checks' | 'invoice' | 'delivery' | 'order' | 'supplier' | 'deliveryPay';

export interface IReportValue {
    data: {
        value: number;
        note: string;
        date: Date;
        value2?: number;
    }[],
    total: number;
    headers: string[];
}
