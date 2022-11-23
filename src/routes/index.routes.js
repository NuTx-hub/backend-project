import {Router} from 'express';
import { employee } from '../controllers/index.controller.js';

const router = Router();

router.get('/employees', employee)

export default router;