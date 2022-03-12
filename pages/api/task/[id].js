import { pool } from "../../../config/db";

export default function Handler (req, res) {

    switch(req.method){
        case 'GET':
            return getTask(req, res);
    }

}

export const getTask = async (req, res) => {
    const { id } = req.body;;
    const [result] = await pool.query('SELECT * FROM task WHERE id = ?', [id]);
    return res.status(200).json(result[0]);
}