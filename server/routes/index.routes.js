import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, obtenerTarea, obtenerUnaTarea, sendMail, sendMailLanding, welcome } from "../controllers/routes.controllers.js";

const router = Router();

router.get("/", welcome);
router.get("/tareas/:id", obtenerTarea);
router.get("/tarea/:id", obtenerUnaTarea);
router.post("/creartarea", crearTarea);
router.put("/editar/:id", editarTarea);
router.delete("/borrar/:id", borrarTarea);
router.post("/mail", sendMail);
router.post("/somosagenciaocho", sendMailLanding);


export default router;