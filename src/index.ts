import express from "express";
const expressApp = express();
const PORT: number = 3000;

expressApp.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: " + PORT);
})
