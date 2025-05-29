import mongoose, {Schema} from 'mongoose';
import {ISale} from "./sales.interface";

const SaleSchema: Schema = new Schema<ISale>({
    name: {type: String, required: true},
    cost: {type: Number, required: true},
    quantity: {type: Number, required: true},
    date: {type: Date, required: true},
    delivery: {type: Number, required: true},
});

export default mongoose.model<ISale>('Sales', SaleSchema);
