import {IPayment} from "./payments.interface";
import Payment from "./payments.model";
import {ISale} from "../sales/sales.interface";

class PaymentsService {
  async addPayments(payments: IPayment[]): Promise<IPayment[]> {
    return await Payment.insertMany(payments.map(p => ({...p, createdDate: new Date()})));
  }

  async getPaymentsByDateRange(fromDate: Date, toDate: Date): Promise<IPayment[]> {
    return  Payment.find({
      createdDate: {
        $gte: fromDate,
        $lte: toDate,
      },
    });
  }
}

export default new PaymentsService();