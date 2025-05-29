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

  async updateProduct(id: string, updates: { cost?: number; delivery?: number }): Promise<IProduct | null> {
    return await Product.findByIdAndUpdate(id, updates, { new: true });
  }
  async deleteProduct(id: string): Promise<IProduct | null> {
    return Product.findByIdAndUpdate(id, {deleted: true}, {new: false})
  }
}

export default new ProductService();