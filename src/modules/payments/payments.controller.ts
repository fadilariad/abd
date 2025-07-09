import { Request, Response } from 'express';
import BaseController from "../../core/base.controller";
import PaymentsService from "./payments.service";

class PaymentsController extends BaseController {
  async addPayments(_req: Request, res: Response) {
   try {
     const newProduct =  await PaymentsService.addPayments(_req.body);
     this.handleSuccess(res, newProduct);
   }catch(error) {
     this.handleError(res, 'Failed to add payments');
   }
  }
  async deletePayment(_req: Request, res: Response) {
   try {
       await PaymentsService.deletePayment(_req.params.id);
       this.handleSuccess(res, 'Payment deleted');
   }catch(error) {
     this.handleError(res, 'Failed to add payments');
   }
  }

}

export default new PaymentsController();