import PdfPrinter from "pdfmake";
import createDocDefinition from "./pdfContent.js";
import { IDocDefinition } from "../../types/pdf.js";

const urlBase = "./src/api/pdfmake/";

const fonts = {
  Roboto: {
    normal: `${urlBase}fonts/Roboto-Regular.ttf`,
    bold: `${urlBase}fonts/Roboto-Medium.ttf`,
    italics: `${urlBase}fonts/Roboto-Italic.ttf`,
    bolditalics: `${urlBase}fonts/Roboto-MediumItalic.ttf`
  },
};

const createPDF = (body: IDocDefinition) => {

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

export default createPDF;
