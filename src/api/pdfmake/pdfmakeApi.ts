import PdfPrinter from "pdfmake";
import createDocDefinition from "./pdfContent";
import { IDocDefinition } from "../../types/pdf";
import { config } from "../../config/config";

const basePath = config.env === "production" ? "/var/task/" : "./";

const fonts = {
  Roboto: {
    normal: `${basePath}src/fonts/Roboto-Regular.ttf`,
    bold: `${basePath}src/fonts/Roboto-Medium.ttf`,
    italics: `${basePath}src/fonts/Roboto-Italic.ttf`,
    bolditalics: `${basePath}src/fonts/Roboto-MediumItalic.ttf`
  },
};

const createPdf = (body: IDocDefinition) => {

  const printer: PdfPrinter = new PdfPrinter(fonts);

  const docDefinition = createDocDefinition(body);

  const pdfDoc = printer.createPdfKitDocument(docDefinition);

  const pdfBufferPromise = new Promise<Buffer>((resolve, reject) => {
    const buffers: Buffer[] = [];
    pdfDoc.on("data", buffer => buffers.push(buffer));
    pdfDoc.on("end", () => resolve(Buffer.concat(buffers)));
    pdfDoc.end();
  });

  return pdfBufferPromise;
}

export default createPdf;
