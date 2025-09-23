import { Request, Response } from 'express';
import BaseController from "../../core/base.controller";
import reportService from "./report.service";

class ReportController extends BaseController {
  async getReport(req: Request, res: Response) {
    try {
      const { from, to } = req.body;
      if (!from || !to) {
        throw new Error(`No to sales for ${from} to ${to}`);
      }
      const fromDate = new Date(from as string);
      const toDate =  new Date(to as string);
      fromDate.setUTCHours(0, 0, 0, 0);
      toDate.setUTCHours(23, 59, 59, 999);
      console.log(fromDate, toDate);
      const report = await reportService.getReport(fromDate, toDate);
      this.handleSuccess(res, report);
    } catch (error) {
      console.error(error);
      this.handleError(res, 'Failed to fetch report');
    }
  }
}

export default new ReportController();