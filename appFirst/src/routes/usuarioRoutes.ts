import { Router } from "express";
import { upload } from "../conf/multer";
import UsuarioController from "../controllers/UsuarioController";

const router = Router();

router.get("/", UsuarioController.listar);
router.get("/:id", UsuarioController.obtenerPorId);
router.put("/:id", UsuarioController.actualizar);
router.delete("/:id", UsuarioController.eliminar);
router.post("/", upload.single("foto"), UsuarioController.crear);

export default router;
