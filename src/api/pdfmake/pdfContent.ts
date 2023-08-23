import { TDocumentDefinitions } from "pdfmake/interfaces.js";
import { showDate, capitalizeWords } from "../../utils/dataUtils.js";
import { IDocDefinition } from "../../types/pdf.js";

const createDocDefinition = ({
  amounts,
  client,
  prices,
  products,
  saleCondition,
  subTotal,
  total,
}: IDocDefinition): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: [
      { text: showDate(), style: "date" },
      { text: "Detalle:", style: "title" },
      { text: `Cliente: ${capitalizeWords(client)}`, style: "info" },
      {
        text: `Condición de la venta: ${saleCondition.toLowerCase()}`,
        style: "info",
      },
      {
        columns: [
          { stack: products, style: "products" },
          { stack: amounts, style: "amount" },
          { stack: prices, style: "price" },
          { stack: subTotal, style: "price" },
        ],
      },
      {
        columns: [
          { text: "Total", style: "totalString" },
          { text: `${total}`, style: "totalNumber" },
        ],
      },
    ],
    styles: {
      title: {
        margin: [0, 15],
        characterSpacing: 1,
        fontSize: 26,
      },
      date: {
        margin: [0, 15],
        fontSize: 14,
      },
      info: {
        margin: [0, 15],
        characterSpacing: 1,
        fontSize: 14,
      },
      products: {
        margin: [0, 15],
        alignment: "left",
        characterSpacing: 1,
        fontSize: 16,
      },
      amount: {
        margin: [0, 15],
        alignment: "center",
        characterSpacing: 1,
        fontSize: 16,
      },
      price: {
        margin: [0, 15],
        alignment: "right",
        characterSpacing: 1,
        fontSize: 16,
      },
      totalString: {
        margin: [0, 15],
        alignment: "left",
        characterSpacing: 1,
        fontSize: 23,
      },
      totalNumber: {
        margin: [0, 15],
        alignment: "right",
        characterSpacing: 1,
        fontSize: 23,
      },
    },
  };
  return docDefinition;
};

export default createDocDefinition;
