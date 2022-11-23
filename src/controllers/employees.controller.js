import {db} from '../../db/db.js';

export const getEmployees = async (req, res) =>{
   const [rows] = await db.query('SELECT * FROM images');
   res.json(rows);
}
export const getEmployee = async (req, res) =>{
   const employee = req.params.id;
   try {
      const [rows] = await db.query('SELECT * FROM images where IdImage=?', [employee]);
      res.send({
         id: rows.insertId,
         type
      })
   } catch (error) {
      return res.status(500).json({
         message: 'Something went wrong'
      })
   }
}


export const createEmployees =  async (req, res) => {
   const {type,name} = req.body;
   const [rows] = await db.query('INSERT INTO images (type, name) values (?,?)', [type, name]);
   res.send({
      id: rows.insertId,
      type,
      name 
   });
}

export const deleteEmployee = async (req, res) => {
   const id=  req.params.id;
   const [rows] = await db.query('DELETE FROM images where IdImage=?', [id]);
   if(rows.length <= 0) return res.status(404).json({
      message: 'No such image found'
   })
   res.json(rows);
}

export const updateEmployees = async (req, res) => {
   const id = req.params.id;
   const [rows] = await db.query('UPDATE images set name= ? WHERE IdImage=?', ['Picapiedras', id]);
   if(rows.length <= 0) return res.status(404).json({
      message: 'No such image found'
   })
   res.json(rows);
}