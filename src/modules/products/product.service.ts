import { IProduct} from "./product.interface";
import Product from './products.model'

class ProductService {

  async getAll(): Promise<IProduct[]> {
    return await Product.find({deleted: false});
  }

  async addProduct(product: IProduct): Promise<IProduct> {
    return await Product.create({...product, deleted: false});
  }

  async getProduct(id: string): Promise<IProduct | null> {
    return await Product.findById(id)
  }

  async updateProduct(id: string, updates: IProduct): Promise<IProduct | null> {
    return await Product.findByIdAndUpdate(id, updates, { new: true });
  }
  async deleteProduct(id: string): Promise<IProduct | null> {
    return Product.findByIdAndUpdate(id, {deleted: true}, {new: false})
  }
  async updateProductStock(products: {id: string, quantity: number}[]): Promise<void> {
      if (!products.length) return;

      const bulkOps = products.map((item) => ({
          updateOne: {
              filter: { _id: item.id },
              update: { $inc: { inStock: -item.quantity } },
          },
      }));

      await Product.bulkWrite(bulkOps);
  }
}

export default new ProductService();