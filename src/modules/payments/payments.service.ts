import {IPayment} from "./payments.interface";
import Payment, {IPaymentModal} from "./payments.model";

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

  async getClientPayments(clientId: string): Promise<IPaymentModal[]> {
    return  Payment.find({clientId})
  }

  async deletePayment(paymentId: string) {
    await Payment.deleteOne({_id: paymentId});
  }
}

export default new PaymentsService();