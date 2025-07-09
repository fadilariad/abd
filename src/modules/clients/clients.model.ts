import mongoose, {Schema} from 'mongoose';
import {IClient} from "./clients.interface";

interface IClientData extends IClient {
    active?: boolean;
}
const ClientSchema: Schema = new Schema<IClientData>({
    name: {type: String, required: true},
    contactName: {type: String, required: true},
    contactPhone: {type: String, required: true},
    active: {type: Boolean, required: true},
    address: {type: String, required: false, default: ''},
    city: {type: String, required: false, default: ''},
    storeId: {type: String, required: false, default: ''},
    note: {type: String, required: false, default: ''},
});

ClientSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
    }
});
export default mongoose.model<IClientData>('Client', ClientSchema);
