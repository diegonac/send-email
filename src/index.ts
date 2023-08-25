import express from "express";
import { boomErrorHandler, domainErrorHandler, errorHandler, logErr } from "./middlewares/error.handler.js";
import { config } from "./config/config.js";
import cors from "cors";
import routerApi from "./routes/index.js";

const app = express();
const PORT: number = 3000;

const allowedOrigins = [config.myFrontend];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido por CORS'));
    }
  },
  methods: ['POST'],
}));

app.use(domainErrorHandler);

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: " + PORT);
})

app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => {
  res.send("Hola mundo");
})

routerApi(app);

app.use(logErr);
app.use(boomErrorHandler);
app.use(errorHandler);
