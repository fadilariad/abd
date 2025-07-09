import { Router } from 'express';
import PaymentController from "./payments.controller";

const router = Router();

router.post('/addPayments', (req, res) => PaymentController.addPayments(req, res));
router.delete('/deletePayment/:id', (req, res) => PaymentController.deletePayment(req, res));

export default router;
