import { Router } from "express";
import respuesta5 from "../controllers/pregunta5.controller";
const router = Router();
router.route("/").get(respuesta5);
export default router;
