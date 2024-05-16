import { Router } from "express";
import respuesta3 from "../controllers/pregunta3.controller";
const router = Router();
router.route("/").get(respuesta3);
export default router;
