import express from "express";
import cors from "cors";
import conectarBD from "./database";
import respuesta1 from "./routes/pregunta1";
import respuesta2 from "./routes/pregunta2";
import respuesta3 from "./routes/pregunta3";
import respuesta4 from "./routes/pregunta4";

const app = express();

const sharePool = async () => {
  app.locals.db = await conectarBD();
  /* console.log("app.locals.db: ", app.locals.db); */
};
app.set("port", 80);
app.set("json spaces", 2);

//Middlewares
/* app.use(morgan('dev')); */
app.use(cors());
app.use(express.json());
sharePool();

//Rutas
app.use("/pregunta1", respuesta1);
app.use("/pregunta2", respuesta2);
app.use("/pregunta3", respuesta3);
app.use("/pregunta4", respuesta4);

export default app;
