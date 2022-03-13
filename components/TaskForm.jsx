import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useState, useEffect } from 'react';

const ProductForm = () => {

    const router = useRouter();

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        if(title <= 1 || description <= 1 ){
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
    <div className='bg-gray-200 w-full max-w-xs container mx-auto my-20'>

        <div className='bg-gray-100 text-sky-500 text-2xl text-center'>
            {
                router.query.id ? "Update your task..." : "Create you task..."
            }
            <br />
            <br />
            <br />
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <input type="text" id='title' name='title' placeholder='Title of the task' className="shadow border rounded py-2 px-3 text-gray-600 mb-3 w-full" onChange={handleChange} value={task.title}/>
            <textarea name="description" id='description' rows="2" placeholder='Description of the task' className="shadow border rounded py-2 px-3 text-gray-600 w-full" onChange={handleChange} value={task.description}></textarea>

            <div className='flex justify-between'>
                <button className="bg-blue-500 hover:bg-blue-600 rounded py-2 px-4 focus:outline-none focus:shadow-outline font-bold text-white mt-2 shadow">
                    {
                        router.query.id ? 'Update task!' : 'Save task!'
                    }
                </button>
                {
                    router.query.id ? <Link key={task.id} href={`/task/id/${task.id}`}><a className='text-red-500 mt-4'>Cancel</a></Link> : null
                }
            </div>
            
            
        </form>
    </div>
  )
}

export default ProductForm