import {IExpenses} from "./expenses.interface";
import Expenses from "./expenses.model";

class ExpensesService {
  async addExpense(expense: IExpenses): Promise<IExpenses> {
    return await Expenses.create(expense);
  }

  async getExpensesByDateRange(fromDate: Date, toDate: Date): Promise<IExpenses[]> {
    return  Expenses.find({
      date: {
        $gte: fromDate,
        $lte: toDate,
      },
    });
  }
}

export default new ExpensesService();