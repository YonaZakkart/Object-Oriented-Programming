import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = Router();

router.post('/', usuarioController.crear);
router.get('/', usuarioController.listar);
router.get('/:id', usuarioController.obtenerPorId);
router.delete('/:id', usuarioController.eliminar);

export default router;