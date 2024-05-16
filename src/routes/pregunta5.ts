import { Router } from "express";
import respuesta5 from "../controllers/pregunta5.controller";
const router = Router();
const { respuesta } = respuesta5;
router.route("/").get(respuesta);
export default router;
