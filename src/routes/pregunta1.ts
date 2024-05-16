import { Router } from "express";
import respuesta1 from "../controllers/pregunta1.controller";
const router = Router();
router.route("/").get(respuesta1);
export default router;
