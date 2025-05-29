import { Request, Response } from 'express';
import BaseController from "../../core/base.controller";
import SalesService from "./sales.service";

class SalesController extends BaseController {
  async addSales(_req: Request, res: Response) {
   try {
     const newProduct =  await SalesService.addSales(_req.body?.sales);
     this.handleSuccess(res, newProduct);
   }catch(error) {
     this.handleError(res, 'Failed to add product');
   }
  }

}

export default new SalesController();