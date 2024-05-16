import { Router } from "express";
import respuesta6 from "../controllers/pregunta6.controller";
const router = Router();
router.route("/").get(respuesta6);
export default router;
