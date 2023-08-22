import express, { Router, Request } from "express";
import nodemailerService from "../services/nodemailer.service.js";
import createPDF from "../api/pdfmake/pdfmakeApi.js";
import { IDocDefinition } from "../types/pdf.js";

const router: Router = express.Router();
const service = new nodemailerService();

router.post("/send-email", async (req: Request, res) => {
  try {
    const body: IDocDefinition = req.body;
    const pdfBuffer = await createPDF(body);
    const response = await service.sendPdf(body.email, pdfBuffer, body.nameFile);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocurrió un error al enviar el PDF');
  }
})

export default router;
