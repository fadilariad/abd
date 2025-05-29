import { Router } from 'express';
import ExpensesController from "./expenses.controller";

const router = Router();

router.post('/addExpense', (req, res) => ExpensesController.addExpenses(req, res));

export default router;
