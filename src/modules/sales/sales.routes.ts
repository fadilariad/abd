import { Router } from 'express';
import PaymentController from "./sales.controller";

const router = Router();

router.post('/addSales', (req, res) => PaymentController.addSales(req, res));

export default router;
