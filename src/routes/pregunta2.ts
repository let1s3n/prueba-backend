import { Router } from "express";
import respuesta2 from "../controllers/pregunta2.controller";
const router = Router();
const { respuesta } = respuesta2;
router.route("/").get(respuesta);
export default router;
