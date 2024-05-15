import { Router } from "express";
import respuesta1 from "../controllers/pregunta1.controller";
const router = Router();
const { respuesta } = respuesta1;
router.route("/").get(respuesta);
export default router;
