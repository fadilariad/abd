import { Router } from 'express';
import SalesController from "./sales.controller";

const router = Router();

router.post('/addSales', (req, res) => SalesController.addSales(req, res));
router.delete('/deleteSale/:id', (req, res) => SalesController.deleteSale(req, res));
router.put('/updateSale/:id', (req, res) => SalesController.updateSale(req, res));
router.put('/convertToInvoice/:order/:invoice', (req, res) => SalesController.convertOrderToInvoice(req, res));

export default router;
