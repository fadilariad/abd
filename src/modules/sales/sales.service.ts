import {ISale} from "./sales.interface";
import Sales from "./sales.model";

class SalesService {
    async addSales(sales: ISale[]): Promise<ISale[]> {
        return await Sales.insertMany(sales);
    }

    async getSalesByDateRange(fromDate: Date, toDate: Date): Promise<ISale[]> {
        return  Sales.find({
            date: {
                $gte: fromDate,
                $lte: toDate,
            },
        });
    }
    async getClientSales(clientId: string): Promise<ISale[]> {
        return await Sales.find({clientId});
    }

    async deleteSale(id: string) {
        await Sales.deleteOne({_id: id});
    }

    async updateSale(id: string, sale: {price: number, quantity: number}) {
        return await Sales.findByIdAndUpdate(id, sale, {new: true});
    }
}

export default new SalesService();