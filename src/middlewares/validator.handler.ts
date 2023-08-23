import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

type TProperty = "body" | "params" | "query";

const validatorHandler = (schema: Joi.Schema, property: TProperty) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];

    const { error } = schema.validate(data, { abortEarly: false });

    if(error) {
      next(boom.badRequest(error));
    }

    next();

  }
}

export default validatorHandler;
