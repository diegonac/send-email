import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

const logErr = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  next(err);
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "Ocurrió un error al enviar el pdf",
    stack: err.stack,
  });
}

const boomErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if(boom.isBoom(err)) {
    const { output } = err;

    res.status(output.statusCode).json(output.payload);

  }

  next(err);
}

export { logErr, errorHandler, boomErrorHandler };
