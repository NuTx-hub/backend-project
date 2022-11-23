import express, { response } from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';


const app = express();

//cada vez que recibe datos, los convierte en json 
app.use(express.json());

app.use(employeesRoutes);
app.use(indexRoutes);

export default app;