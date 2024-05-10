import express, { Application, Router } from "express";
import nodemailerRouter from "./nodemailer.router";

const routerApi = (app: Application): void => {
  const router: Router = express.Router();
  app.use("/api/v1", router);
  router.use("/email", nodemailerRouter);
}

export default routerApi;
