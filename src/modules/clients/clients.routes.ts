import { Router } from 'express';
import ClientsController from "./clients.controller";

const router = Router();

router.get('/getAll', (req, res) => ClientsController.getClients(req, res));
router.get('/getClientHistory/:id', async (req, res) => await ClientsController.getClientHistory(req, res));
router.post('/addClient', (req, res) => ClientsController.addClient(req, res));
router.put('/updateClient/:id', (req, res) => ClientsController.updateClient(req, res));
router.delete('/:id', (req, res) => ClientsController.deleteClient(req, res));
export default router;
