import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useState, useEffect } from 'react';

const ProductForm = () => {

    const status = {
        "pending": "Pendiente",
        "inprogress": "En progreso",
        "done": "Terminado"
    }

    const router = useRouter();

    const [task, setTask] = useState({
        title: "",
        description: "",
        responsible: "",
        status: status.pending,
        createdAt: new Date().now
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const responsible = e.target.responsible.value;
        const status = e.target.status.value;
        const createdAt = new Date().now;
        if(title <= 1 || description <= 1 || responsible <= 1){
            var message;
            return message = "Don`t input value null...";
        }else{
            if(router.query.id){
                console.log('update')
                const res = await axios.put('/api/task/' + router.query.id, task)
            }else{
                console.log('post')
                const res = await axios.post('/api/task', task);
            }
            router.push('/task/')
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setTask({...task, [name]: value})
        
    }

    useEffect(() => {
        const getTask = async () => {
            const { data } = await axios.get('/api/task/' + router.query.id)
            setTask(data)
        }

        if(router.query.id){
            getTask(router.query.id)
        }
    }, [])

  return (
    <div className='bg-gray-200 w-full max-w-xl container mx-auto my-10'>

        <div className='bg-gray-100 text-sky-500 text-2xl text-center'>
            {
                router.query.id ? "Update this task..." : "Create a task..."
            }
            <br />
            <br />

        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">

            <input type="text" id='title' name='title' placeholder='Title of the task' className="shadow border rounded py-2 px-3 text-gray-600 mb-3 w-full " onChange={handleChange} value={task.title}/>
            <textarea name="description" id='description' rows="2" placeholder='Description of the task' className="shadow border rounded pt-2 py-20 px-3 text-gray-600 w-full" onChange={handleChange} value={task.description}></textarea>
            <input type="text" id='responsible' name='responsible' placeholder='Responsible of the task' className="shadow border rounded py-2 px-3 text-gray-600 my-2 w-full " onChange={handleChange} value={task.responsible}/>
            <select name="status" id='status' className="shadow border rounded py-2 px-3 text-gray-600 my-2 w-full" onChange={handleChange} value={task.status}>
                <option value={status.pending}>{status.pending}</option>
                <option value={status.inprogress}>{status.inprogress}</option>
                <option value={status.done}>{status.done}</option>
            </select>

            <div className='flex justify-between'>
                <button className="bg-blue-500 hover:bg-blue-600 rounded py-2 px-4 focus:outline-none focus:shadow-outline font-bold text-white mt-2 shadow">
                    {
                        router.query.id ? 'Update task!' : 'Save task!'
                    }
                </button>
                {
                    router.query.id ? <Link key={task.id} href={`/task/id/${task.id}`}><a className='text-red-500 mt-4 hover:underline'>Cancel</a></Link> : null
                }
            </div>
            
            
        </form>
    </div>
  )
}

export default ProductForm