import mongoose, {Schema} from 'mongoose';
import {IExpenses} from "./expenses.interface";

const ExpensesSchema: Schema = new Schema<IExpenses>({
    type: {type: Number, required: true},
    amount: {type: Number, required: true},
    note: {type: String, required: false},
    date: {type: Date, required: true},
});

export default mongoose.model<IExpenses>('Expenses', ExpensesSchema);
