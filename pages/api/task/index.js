import { pool } from "../../../config/db"

export default async function handler(req, res){

    switch(req.method){
        case 'GET':
            return await getTasks(req, res);
        case 'POST': 
            return await createTask(req, res);
    }

}

const getTasks = async (req, res) => {
    const [ result ] = await pool.query('SELECT * FROM task');
    console.log(result)
    return res.status(200).json(result);
}

const createTask = async (req, res) => {
    const { title, description } = req.body;

    const [ result ] = await pool.query('INSERT INTO task SET ?', {
        title,
        description,
    });
    return res.status(200).json({ title, description, id: result.insertId })
}
