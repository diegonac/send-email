import express from "express";
import routerApi from "./routes/index.js";
import cors from "cors";
import { boomErrorHandler, domainErrorHandler, errorHandler, logErr } from "./middlewares/error.handler.js";

const app = express();
const PORT: number = 3000;

const allowedOrigins = ['http://localhost:5173', 'http://192.168.100.153:5173', 'https://calculator-register.vercel.app'];

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
  res.send("Hola mundo, primer servidor con typescript");
})

routerApi(app);

app.use(logErr);
app.use(boomErrorHandler);
app.use(errorHandler);
