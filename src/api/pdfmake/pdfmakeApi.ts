import PdfPrinter from "pdfmake";
import createDocDefinition from "./pdfContent.js";
import { IDocDefinition } from "../../types/pdf.js";

const fonts = {
  Roboto: {
    normal: `fonts/Roboto-Regular.ttf`,
    bold: `fonts/Roboto-Medium.ttf`,
    italics: `fonts/Roboto-Italic.ttf`,
    bolditalics: `fonts/Roboto-MediumItalic.ttf`
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
