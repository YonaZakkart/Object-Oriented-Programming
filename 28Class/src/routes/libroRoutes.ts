import { Router } from 'express';
import libroController from '../controllers/LibroController';

const router = Router();

router.post('/', libroController.crear);
router.get('/', libroController.listar);
router.get('/:id', libroController.obtenerPorId);
router.delete('/:id', libroController.eliminar);

export default router;