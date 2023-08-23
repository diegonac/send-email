import express, { Router, Request, Response, NextFunction } from "express";
import boom from "@hapi/boom";
import { config } from "../config/config.js";
import createPdf from "../api/pdfmake/pdfmakeApi.js";
import { IDocDefinition } from "../types/pdf.js";
import nodemailerService from "../services/nodemailer.service.js";
import sendPdfSchema from "../schemas/pdf.schema.js";
import validatorHandler from "../middlewares/validator.handler.js";

const router: Router = express.Router();
const service = new nodemailerService();

router.post(
  "/send-email",
  validatorHandler(sendPdfSchema, "body"),
  async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body: IDocDefinition = req.body;
    const pdfBuffer = await createPdf(body);
    const response = await service.sendPdf(body.email, pdfBuffer, body.client);
    res.json(response);
  } catch (error) {
    next(error);
  }
})

export default router;
