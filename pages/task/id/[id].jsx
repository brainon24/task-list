import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

const ViewTaskPage = ({ task }) => {
    
    const router = useRouter();

    const handleDelete = async (id) => {
        const res = await axios.delete('/api/task/' + id)
        router.push('/task/')
    } 

    return (
        <div>
            <h1>Hola mujndo</h1>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded' onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
  )
}

export const getServerSideProps = async (ctx) => {

    const { data: task } = await axios.get('http://localhost:3000/api/task/' + ctx.query.id)

    return {
        props: {
            task,
        }
    }

}

export default ViewTaskPage