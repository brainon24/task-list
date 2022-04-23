import { pool } from "../../../config/db";

export default async function Handler (req, res) {

    switch(req.method){
        case 'GET':
            return await getTask(req, res);
        case 'DELETE': 
            return await deleteTask(req, res);
        case 'PUT':
            return await updateTask(req, res);
        default:
            break;
    }

}

export const getTask = async (req, res) => {
    const { id } = req.query;
    const [result] = await pool.query('SELECT * FROM task WHERE id = ?', [id]);
    return res.status(200).json(result[0]);
}

export const deleteTask = async (req, res) => {
    const { id } = req.query;
    const result = await pool.query('DELETE FROM task WHERE id = ?', [id]);
    return res.status(200).json();
}

export const updateTask = async (req, res) => {
    const { id } = req.query;
    const { title, description, responsible, status,  } = req.body;
    try{
        await pool.query('UPDATE task SET title = ?, description = ?, responsible = ?, status = ? WHERE id = ?', [title, description, responsible, status, id]);
        res.status(204).json();
    }catch(error){
        console.log('ERROR FROM UPDATE TASK', error)
    }
}