import mongoose, {Schema} from 'mongoose';
import {IPayment} from "./payments.interface";

export interface IPaymentModal extends IPayment {
    createdDate: Date;
}
const PaymentSchema: Schema = new Schema<IPaymentModal>({
    type: {type: Number, required: true},
    amount: {type: Number, required: true},
    note: {type: String, required: false},
    date: {type: Date, required: true},
    createdDate: {type: Date, required: true},
    clientId: {type: String, required: false},
    clientName: {type: String, required: false},
});

export default mongoose.model<IPaymentModal>('Payment', PaymentSchema);
