export interface IClient {
    id: string;
    name: string
    contactName: string;
    contactPhone: string;
    address: string;
    city: string;
    storeId: string;
    note: string;
}
export interface GroupedData<T> {
    date: Date;
    total: number;
    data: T[];
    type: number;
    documentNumber?: string;
}