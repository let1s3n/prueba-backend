import { Router } from "express";
import respuesta6 from "../controllers/pregunta6.controller";
const router = Router();
const { respuesta } = respuesta6;
router.route("/").get(respuesta);
export default router;
