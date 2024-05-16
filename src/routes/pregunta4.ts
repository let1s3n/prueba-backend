import { Router } from "express";
import respuesta4 from "../controllers/pregunta4.controller";
const router = Router();
router.route("/").get(respuesta4);
export default router;
