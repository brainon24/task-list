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
                <a className="m-10 text-2xl underline hover:no-underline">🔙 Volver</a></Link>
            </div>
            <div className='flex justify-between border border-gray-200 shadow-md p-6 m-5 bg-white'>
                <div>
                    <button className='bg-gray-200 hover:bg-gray-300 px-1 rounded-full'>✏️</button>
                    <h1>{task.title}</h1>
                    <hr />
                    <p className='mt-2'>{task.description}</p>
                </div>
                <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded' onClick={() => handleDelete(task.id)}>🗑️</button>
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