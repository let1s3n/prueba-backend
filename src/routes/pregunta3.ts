import { Router } from "express";
import respuesta3 from "../controllers/pregunta3.controller";
const router = Router();
const { respuesta } = respuesta3;
router.route("/").get(respuesta);
export default router;
