import {Router} from "express";
import userRoutes from "./modules/reports/report.routes";
import productsRoutes from "./modules/products/product.routes";
import salesRoutes from "./modules/sales/sales.routes";
import paymentsRoutes from "./modules/payments/payments.routes";
import expensesRoutes from "./modules/expemses/expenses.routes";
import reportRoutes from "./modules/reports/report.routes";
const router = Router();
router.use('/api/v1/users', userRoutes);
router.use('/api/v1/products', productsRoutes);
router.use('/api/v1/sales', salesRoutes);
router.use('/api/v1/payments', paymentsRoutes);
router.use('/api/v1/expenses', expensesRoutes);
router.use('/api/v1/report', reportRoutes);

export default router;
