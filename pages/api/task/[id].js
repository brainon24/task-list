import { pool } from "../../../config/db";

export default async function Handler (req, res) {

    switch(req.method){
        case 'GET':
            return await getTask(req, res);
        case 'DELETE': 
            return await deleteTask(req, res);
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