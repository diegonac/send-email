import PdfPrinter from "pdfmake";
import fs from "fs";
import createDocDefinition from "./pdfContent.js";
import { IDocDefinition } from "../../types/pdf.js";


const createPDF = (body: IDocDefinition) => {
  const fonts = {
    Roboto: {
      normal: 'fonts/Roboto-Regular.ttf',
      bold: 'fonts/Roboto-Medium.ttf',
      italics: 'fonts/Roboto-Italic.ttf',
      bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    },
  };

  const printer: PdfPrinter = new PdfPrinter(fonts);

  const docDefinition = createDocDefinition(body);

  const pdfDoc = printer.createPdfKitDocument(docDefinition);

  pdfDoc.pipe(fs.createWriteStream("document.pdf"));
  pdfDoc.end();
}
