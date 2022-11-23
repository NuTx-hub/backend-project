import {db} from '../db.js';

export const employee = async (req, res) => {
   const [result] = await db.query('SELECT * FROM images');
   res.json(result);
}
