import {IAddSale, ISale} from "./sales.interface";
import Sales from "./sales.model";
import ProductService from "../products/product.service";

class SalesService {
    async addSales(sales: IAddSale[]): Promise<ISale[]> {
        const newSales = await Sales.insertMany(sales);
        const updateStock = await ProductService.updateProductStock(sales.map(s => ({id: s.id, quantity: s.quantity})))
        return newSales;
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

    async convertOrderToInvoice(order: string, invoice: string) {
        await Sales.updateMany({invoice: order}, {invoice: invoice})
    }
}

export default new SalesService();