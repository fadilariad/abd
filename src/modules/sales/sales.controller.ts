import {Request, Response} from 'express';
import BaseController from "../../core/base.controller";
import SalesService from "./sales.service";

class SalesController extends BaseController {
    async addSales(_req: Request, res: Response) {
        try {
            const newProduct = await SalesService.addSales(_req.body?.sales);
            this.handleSuccess(res, newProduct);
        } catch (error) {
            console.log(error);
            this.handleError(res, 'Failed to add product');
        }
    }

    async deleteSale(_req: Request, res: Response) {
        try {
            await SalesService.deleteSale(_req.params?.id);
            this.handleSuccess(res, 'Sale deleted successfully');
        } catch (error) {
            this.handleError(res, 'Failed to delete product');
        }
    }

    async updateSale(_req: Request, res: Response) {
        try {
            const sale = await SalesService.updateSale(_req.params?.id, _req.body);
            this.handleSuccess(res, sale);
        } catch (error) {
            this.handleError(res, 'Failed to update sale');
        }
    }
    async convertOrderToInvoice(_req: Request, res: Response) {
        try {
            const sale = await SalesService.convertOrderToInvoice(_req.params?.order, _req.params?.invoice);
            this.handleSuccess(res, sale);
        } catch (error) {
            this.handleError(res, 'Failed to update sale');
        }
    }

}

export default new SalesController();