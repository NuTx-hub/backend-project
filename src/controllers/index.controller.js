import {db} from '../../db/db.js';

export const employee = async (req, res) => {
   const [result] = await db.query('SELECT * FROM images');
   res.json(result);
}
