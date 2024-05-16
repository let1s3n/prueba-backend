import express from "express";
import cors from "cors";
import conectarBD from "./database/database";
import respuesta1 from "./routes/pregunta1";
import respuesta2 from "./routes/pregunta2";
import respuesta3 from "./routes/pregunta3";
import respuesta4 from "./routes/pregunta4";
import respuesta5 from "./routes/pregunta5";
import respuesta6 from "./routes/pregunta6";

const app = express();

const sharePool = async () => {
  app.locals.db = await conectarBD();
};
app.set("port", 80);
app.set("json spaces", 2);

app.use(cors());
app.use(express.json());
sharePool();

//Rutas
app.use("/pregunta1", respuesta1);
app.use("/pregunta2", respuesta2);
app.use("/pregunta3", respuesta3);
app.use("/pregunta4", respuesta4);
app.use("/pregunta5", respuesta5);
app.use("/pregunta6", respuesta6);

export default app;
