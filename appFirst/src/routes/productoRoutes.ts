import { Router } from "express";
import { upload } from "../conf/multer";
import ProductoController from "../controllers/ProductoController";

const router = Router();

router.get("/", ProductoController.listar);
router.get("/:id", ProductoController.obtenerPorId);
router.put("/:id", ProductoController.actualizar);
router.delete("/:id", ProductoController.eliminar);
router.post("/", upload.single("imagen"), ProductoController.crear);

export default router;