import express, { Router, Request } from "express";
import multer from 'multer';
import nodemailerService from "../services/nodemailer.service.js";
import createPDF from "../api/pdfmake/pdfmakeApi.js";
import { IDocDefinition } from "../types/pdf.js";

const router: Router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const service = new nodemailerService();

router.post("/send-email", upload.single('pdf'), async (req: Request, res) => {
  try {
    const pdfBuffer = req.file?.buffer as Buffer;
    const email = req.query.email as string;
    const nameFile = req.query.nameFile as string;
    if (!pdfBuffer || !email) {
      throw new Error('PDF o email faltante');
    }
    const response = await service.sendPdf(email, pdfBuffer, nameFile);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocurrió un error al enviar el PDF');
  }
})

router.post("/send", async (req: Request, res) => {
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
