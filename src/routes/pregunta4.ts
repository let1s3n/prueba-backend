import { Router } from "express";
import respuesta4 from "../controllers/pregunta4.controller";
const router = Router();
const { respuesta } = respuesta4;
router.route("/").get(respuesta);
export default router;
