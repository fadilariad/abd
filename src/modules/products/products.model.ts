import mongoose, {Schema} from 'mongoose';
import {IProduct} from "./product.interface";

interface IProductData extends IProduct {
    deleted?: boolean;
}
const ProductSchema: Schema = new Schema<IProductData>({
    name: {type: String, required: true},
    cost: {type: Number, required: true},
    delivery: {type: Number, required: true},
    deleted: {type: Boolean, required: true},
});

ProductSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        ret.delivery = ret.delivery || 0;
        delete ret._id;
    }
});
export default mongoose.model<IProductData>('Product', ProductSchema);
