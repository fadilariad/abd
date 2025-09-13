import {GroupedData, IClient} from "./clients.interface";
import Client from './clients.model';
import SalesService from '../sales/sales.service';
import PaymentsService from '../payments/payments.service';
import {groupPaymentsByDate, groupSalesByDate} from "./clients.utils";
import {ISale} from "../sales/sales.interface";
import {IPaymentModal} from "../payments/payments.model";

class ClientService {


    async getAll(): Promise<IClient[]> {
        return await Client.find({active: true});
    }

    async addClient(client: IClient): Promise<IClient> {
        return await Client.create({...client, active: true});
    }

    async getClientHistory(id: string): Promise<(GroupedData<IPaymentModal> | GroupedData<ISale>)[]> {
        const payments = await PaymentsService.getClientPayments(id);
        const sales = await SalesService.getClientSales(id);
        const paymentsGroups = groupPaymentsByDate(payments)
        const salesGroups = groupSalesByDate(sales);
        return [...paymentsGroups, ...salesGroups].sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    async updateClient(id: string, updates: IClient): Promise<IClient | null> {
        return await Client.findByIdAndUpdate(id, updates, {new: true});
    }

    async deleteClient(id: string): Promise<IClient | null> {
        return Client.findByIdAndUpdate(id, {active: false}, {new: false})
    }
    async getClientsHistory(): Promise<(IClient & {total: number, history: (GroupedData<IPaymentModal> | GroupedData<ISale>)[]})[]> {
        const clients = await Client.find({active: true}).lean();
        const clientsHistory = Promise.all(clients.map(async client => {
            const history = await this.getClientHistory(client._id.toString());
            return {...client, history, total: history.reduce((acc, cur) => cur.type === 1 ? acc - cur.total : acc + cur.total, 0)};
        }));
        return clientsHistory;
    }
}

export default new ClientService();