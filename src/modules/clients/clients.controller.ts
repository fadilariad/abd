import {Request, Response} from 'express';
import BaseController from "../../core/base.controller";
import ClientsService from "./clients.service";

class ClientsController extends BaseController {
    async getClients(_req: Request, res: Response) {
        try {
            const clients = await ClientsService.getAll();
            this.handleSuccess(res, clients);
        } catch (error) {
            this.handleError(res, 'Failed to fetch clients');
        }
    }

    addClient(_req: Request, res: Response) {
        try {

            const newClient = ClientsService.addClient(_req.body);
            this.handleSuccess(res, newClient);
        } catch (error) {
            this.handleError(res, 'Failed to add client');
        }
    }

    updateClient(_req: Request, res: Response) {
        try {

            const newClient = ClientsService.updateClient(_req.params.id, _req.body);
            this.handleSuccess(res, newClient);
        } catch (error) {
            this.handleError(res, 'Failed to update client');
        }
    }

    deleteClient(_req: Request, res: Response) {
        try {
            const deletedClient = ClientsService.deleteClient(_req.params.id);
            this.handleSuccess(res, deletedClient);
        } catch (error) {
          this.handleError(res, 'Failed to delete client');
        }
    }
    async getClientHistory(_req: Request, res: Response) {
        try {
            const data = await ClientsService.getClientHistory(_req.params.id);
            this.handleSuccess(res, data);
        } catch (error) {
          this.handleError(res, 'Failed to get client history');
        }
    }
}

export default new ClientsController();