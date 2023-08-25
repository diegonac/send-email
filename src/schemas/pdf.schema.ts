import Joi from "joi";

const amounts = Joi.array().items(Joi.string());
const client = Joi.string().allow("");
const email = Joi.string().email();
const prices = Joi.array().items(Joi.string());
const products = Joi.array().items(Joi.string().allow(""));
const saleCondition = Joi.string().allow("");
const subTotal = Joi.array().items(Joi.string());
const total = Joi.string();

const sendPdfSchema = Joi.object({
  amounts: amounts.required(),
  client: client.required(),
  email: email.required(),
  prices: prices.required(),
  products: products.required(),
  saleCondition: saleCondition.required(),
  subTotal: subTotal.required(),
  total: total.required(),
});

export default sendPdfSchema;
