import {ISale} from "../sales/sales.interface";
import {IPaymentModal} from "../payments/payments.model";
import {EPaymentType} from "../payments/payments.interface";
import {GroupedData} from "./clients.interface";



export function groupSalesByDate(sales: ISale[]): GroupedData<ISale>[] {
    const groups: { [key: string]: GroupedData<ISale> } = {};

    sales.forEach(sale => {
        // Get YYYY-MM-DD string as key
        const dateKey = sale.date.toISOString().split("T")[0];
        const invoiceNumber = sale.invoice
        if (!groups[invoiceNumber]) {
            groups[invoiceNumber] = {
                date: new Date(dateKey),
                total: 0,
                data: [],
                type: 1,
                documentNumber: invoiceNumber,
            };
        }

        groups[invoiceNumber].data.push(sale);
        groups[invoiceNumber].total += (sale.price || 0) * sale.quantity;
    });

    return Object.values(groups);
}

export function groupPaymentsByDate(payments: IPaymentModal[]): GroupedData<IPaymentModal>[] {
    const groups: { [key: string]: GroupedData<IPaymentModal> } = {};

    payments.forEach(payment => {
        // Get YYYY-MM-DD string as key
        const dateKey = payment.type === EPaymentType.CHECK ? payment.createdDate.toISOString().split("T")[0] :payment.date.toISOString().split("T")[0];

        if (!groups[dateKey]) {
            groups[dateKey] = {
                date: new Date(dateKey),
                total: 0,
                data: [],
                type: 2
            };
        }

        groups[dateKey].data.push(payment);
        groups[dateKey].total += payment.amount ?? 0;
    });

    return Object.values(groups);
}