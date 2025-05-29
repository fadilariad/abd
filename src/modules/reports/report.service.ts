import {IReport} from './report.interface';
import SalesService from "../sales/sales.service";
import PaymentsService from "../payments/payments.service";
import {EPaymentType} from "../payments/payments.interface";
import ExpensesService from "../expemses/expenses.service";
import {ExpensesType} from "../expemses/expenses.interface";

class ReportService {
  async getReport(fromDate: Date, toDate: Date): Promise<IReport> {
    const sales = await SalesService.getSalesByDateRange(fromDate, toDate);
    const payments = await PaymentsService.getPaymentsByDateRange(fromDate, toDate);
    const expenses = await ExpensesService.getExpensesByDateRange(fromDate, toDate);
    const cash = payments.filter((payment) => payment.type === EPaymentType.CASH );
    const checks = payments.filter((payment) => payment.type === EPaymentType.CHECK );
    const invoices = payments.filter((payment) => payment.type === EPaymentType.INVOICE );
    const orders = payments.filter((payment) => payment.type === EPaymentType.ORDER );
    const gas = expenses.filter(ex => ex.type === ExpensesType.GAS)
    const home = expenses.filter(ex => ex.type === ExpensesType.HOME);
    const others = expenses.filter(ex => ex.type === ExpensesType.OTHERS);
    const salesHeaders = ['quantity', 'cost', 'name', 'date'];
    const paymentsHeaders = ['amount', 'note', 'date'];

    return {
      sales: {
        total: sales.reduce((sum, sale) => sum + (sale.cost * sale.quantity), 0),
        data: sales.map(sale => ({value: sale.quantity, note: `${sale.name}`, date: sale.date, value2: sale.cost})),
        headers: salesHeaders
      },
      gas: {
        total: gas.reduce((sum, ex) => sum + ex.amount, 0),
        data: gas.map(ex => ({value: ex.amount, note: ex.note, date: ex.date})),
        headers: paymentsHeaders
      },
      others: {
        total: others.reduce((sum, ex) => sum + ex.amount, 0),
        data: others.map(ex => ({value: ex.amount, note: ex.note, date: ex.date})),
        headers: paymentsHeaders
      },
      checks: {
        total: checks.reduce((sum, check) => sum + check.amount, 0),
        data: checks.map(check => ({value: check.amount, note: check.note, date: check.date})),
        headers: paymentsHeaders
      },
      invoice: {
        total: invoices.reduce((sum, invoice) => sum + invoice.amount, 0),
        data: invoices.map(invoice => ({value: invoice.amount, note: invoice.note, date: invoice.date})),
        headers: paymentsHeaders
      },
      order: {
        total: orders.reduce((sum, invoice) => sum + invoice.amount, 0),
        data: orders.map(invoice => ({value: invoice.amount, note: invoice.note, date: invoice.date})),
        headers: paymentsHeaders
      },
      cash: {
        total: cash.reduce((sum, cash) => sum + cash.amount, 0),
        data: cash.map(cash => ({value: cash.amount, note: cash.note, date: cash.date})),
        headers: paymentsHeaders
      },
      home: {
        total: home.reduce((sum, home) => sum + home.amount, 0),
        data: home.map(ex => ({value: ex.amount, note: ex.note, date: ex.date})),
        headers: paymentsHeaders
      },
      delivery: {
        total: sales.reduce((sum, sale) => sum + (sale.delivery * sale.quantity), 0),
        data: sales.map(sale => ({value: sale.quantity, note: `${sale.name}`, date: sale.date, value2: sale.delivery})),
        headers: salesHeaders
      }
    }
  }
}

export default new ReportService();