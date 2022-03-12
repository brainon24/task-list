import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';

const ProductForm = () => {

    const router = useRouter();

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/task', task);
        router.push('/task/')
    }

    const handleChange = ({ target: { name, value } }) => {
        setTask({...task, [name]: value})
    }

  return (
    <div className='bg-gray-200 w-full max-w-xs container mx-auto my-20'>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <input type="text" name='title' placeholder='Title of the task' className="shadow border rounded py-2 px-3 text-gray-600 mb-3" onChange={handleChange}/>
            <textarea name="description" rows="2" placeholder='Description of the task' className="shadow border rounded py-2 px-3 text-gray-600" onChange={handleChange}></textarea>
            <button className="bg-blue-500 hover:bg-blue-600 rounded py-2 px-4 focus:outline-none focus:shadow-outline font-bold text-white mt-2">Save task!</button>

        </form>
    </div>
  )
}

export default ProductForm