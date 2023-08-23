import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import { config } from "../config/config.js";

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

const domainErrorHandler = (req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = [config.myFrontend];
  const origin = req.hostname;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    next();
  } else {
    res.status(403).send('Acceso prohibido desde este dominio');
  }
};

export { logErr, errorHandler, boomErrorHandler, domainErrorHandler };
