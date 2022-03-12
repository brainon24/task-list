import { pool } from "../../../config/db"

export default async function handler(req, res){

    switch(req.method){
        case 'GET':
            return await getTask(req, res);
        case 'POST': 
            return await createTask(req, res);
    }

}

const getTask = async (req, res) => {
    console.log('getting task')
    const [ result ] = await pool.query('SELECT FROM * task');
    return res.status(200).json(result);
}

const createTask = async (req, res) => {
    console.log('posting a task')
    const [ result ] = await pool.query('INSERT INTO task SET ?', {
        title,
        description,
    });
    return res.status(200).json({ title, description, id: result.insertId })
}
