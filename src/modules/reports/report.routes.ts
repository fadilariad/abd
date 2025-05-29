import { Router } from 'express';
import ReportController from "./report.controller";

const router = Router();

router.post('/getReport', (req, res) => ReportController.getReport(req, res));
export default router;
