import mongoose, {Schema} from 'mongoose';
import {ISale} from "./sales.interface";
import CounterService from "../counter/counter.service";

const SaleSchema: Schema = new Schema<ISale>({
    name: {type: String, required: true},
    cost: {type: Number, required: true},
    quantity: {type: Number, required: true},
    date: {type: Date, required: true},
    delivery: {type: Number, required: true},
    clientId: {type: String, required: false, default: ''},
    clientName: {type: String, required: false, default: ''},
    price: {type: Number, required: false, default: 0},
    invoice: {type: String, required: true, default: ''},
});
SaleSchema.pre('insertMany', async function (next, docs: ISale[]) {
    const hasInvoice = docs.some(doc => !!doc.invoice);
    if (!hasInvoice) {
        const nextNumber = await CounterService.getNextOrderNumber();
        const invoiceValue = `O-${nextNumber}`;

        for (const doc of docs) {
            doc.invoice = invoiceValue;
        }
    }

    next();
});
export default mongoose.model<ISale>('Sales', SaleSchema);
