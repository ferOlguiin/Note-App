import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, obtenerTarea, obtenerUnaTarea } from "../controllers/routes.controllers.js";

const router = Router();

router.get("/tareas/:id", obtenerTarea);
router.get("/tarea/:id", obtenerUnaTarea);
router.post("/creartarea", crearTarea);
router.put("/editar/:id", editarTarea);
router.delete("/borrar/:id", borrarTarea);

export default router;