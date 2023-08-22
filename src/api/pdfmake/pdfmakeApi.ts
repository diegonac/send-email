import PdfPrinter from "pdfmake";
import fs from "fs";
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

  pdfDoc.pipe(fs.createWriteStream(`${urlBase}document.pdf`));
  pdfDoc.end();
}

export default createPDF;
