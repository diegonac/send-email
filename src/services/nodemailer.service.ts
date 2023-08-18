import nodemailer, { SendMailOptions } from "nodemailer";
import { config } from "../config/config.js";

class nodemailerService {
  async sendEmail(infoEmail: SendMailOptions) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: config.ggMail,
          pass: config.ggKey,
        },
      });

      await transporter.sendMail(infoEmail);
      return {message: "Email enviado"};
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  async sendPdf(email: string, pdfBuffer: Buffer, nameFile: string) {

    try {
      const mail = {
        from: `${config.ggMail}`,
        to: `${email}`,
        subject: "Comprobante de compra",
        text: '¡Gracias por su compra!',
        attachments: [
          {
            filename: `${nameFile}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf',
          },
        ],
      };

      const response = await this.sendEmail(mail);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

}

export default nodemailerService;
