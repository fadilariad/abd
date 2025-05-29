import { Request, Response } from 'express';
import BaseController from "../../core/base.controller";
import ExpensesService from "./expenses.service";

class ExpensesController extends BaseController {
  async addExpenses(_req: Request, res: Response) {
   try {
       console.log(_req.body);
     const newExpense =  await ExpensesService.addExpense(_req.body);
     this.handleSuccess(res, newExpense);
   }catch(error) {
     this.handleError(res, 'Failed to add expense');
   }
  }

}

export default new ExpensesController();