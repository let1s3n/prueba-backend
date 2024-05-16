import { Router } from "express";
import respuesta2 from "../controllers/pregunta2.controller";
const router = Router();
router.route("/").get(respuesta2);
export default router;
