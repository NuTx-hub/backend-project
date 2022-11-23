import {createPool} from 'mysql2/promise';
import {
   DB_DATABASE,DB_HOST, DB_PASSWORD, DB_PORT, DB_USER
} from '../src/config.js';

export const db = createPool({
   user: DB_USER,
   host: DB_HOST,
   database: DB_DATABASE,
   password: DB_PASSWORD,
   port: DB_PORT
})