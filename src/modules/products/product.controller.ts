import {Request, Response} from 'express';
import BaseController from "../../core/base.controller";
import ProductService from "./product.service";

class ProductsController extends BaseController {
    async getProducts(_req: Request, res: Response) {
        try {
            const products = await ProductService.getAll();
            this.handleSuccess(res, products);
        } catch (error) {
            this.handleError(res, 'Failed to fetch products');
        }
    }

    addProduct(_req: Request, res: Response) {
        try {

            const newProduct = ProductService.addProduct(_req.body);
            this.handleSuccess(res, newProduct);
        } catch (error) {
            this.handleError(res, 'Failed to add product');
        }
    }

    updateProduct(_req: Request, res: Response) {
        try {

            const newProduct = ProductService.updateProduct(_req.params.id, _req.body);
            this.handleSuccess(res, newProduct);
        } catch (error) {
            this.handleError(res, 'Failed to add product');
        }
    }

    deleteProduct(_req: Request, res: Response) {
        try {
            const deletedProduct = ProductService.deleteProduct(_req.params.id);
            this.handleSuccess(res, deletedProduct);
        } catch (error) {
          this.handleError(res, 'Failed to delete product');
        }
    }
}

export default new ProductsController();