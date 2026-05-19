import { Router } from 'express';
import prestamoController from '../controllers/PrestamoController';

const router = Router();

router.post('/', prestamoController.crear);
router.get('/', prestamoController.listar);
router.put('/:id/devolver', prestamoController.devolver);

export default router;