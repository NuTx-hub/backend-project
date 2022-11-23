import {Router} from 'express';
import {getEmployees, getEmployee, createEmployees, deleteEmployee, updateEmployees} from '../controllers/employees.controller.js';

const router = Router();

router.get('/get', getEmployees)
router.get('/get/:id', getEmployee);
router.post('/post', createEmployees)
router.patch('/patch/:id', updateEmployees)
router.delete('/delete/:id', deleteEmployee)


export default router;