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
}

export default new SalesService();