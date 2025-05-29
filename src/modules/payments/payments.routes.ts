import { Router } from 'express';
import PaymentController from "./payments.controller";

const router = Router();

router.post('/addPayments', (req, res) => PaymentController.addPayments(req, res));

export default router;
