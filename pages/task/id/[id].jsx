import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../../components/Layout';

const ViewTaskPage = ({ task }) => {
    
    const router = useRouter();

    const handleDelete = async (id) => {
        const res = await axios.delete('/api/task/' + id)
        router.push('/task/')
    } 

    return (
        <Layout>
            <div className='flex justify-between'>
                <h1 className='text-3xl m-10'>This is your Task!</h1>
                <Link key={task.id} href="/task/" >
                <a className="m-10 text-sm underline underline-offset-4 decoration-sky-500 hover:decoration-sky-600">🔙 Volver</a></Link>
            </div>
            <div className='border border-gray-200 shadow-md p-6 m-5 bg-white'>
                <div className='flex justify-between mb-5'>
                    <button className='bg-gray-200 hover:bg-gray-300 px-3 rounded-full' onClick={() => router.push('/task/edit/' + task.id)}>✏️</button>
                    <button className='bg-red-500 hover:bg-red-600 py-2 px-3 rounded-full' onClick={() => handleDelete(task.id)}>🗑️</button>
                </div>
                <div>
                    <h1>{task.title}</h1>
                    <hr />
                    <p className='mt-2 text-neutral-600 text-sm'>{task.description}</p>
                </div>     
            </div>
            <br />
            <br />
            
        </Layout>
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