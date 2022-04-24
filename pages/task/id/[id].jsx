import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../../components/Layout';
import { dateFunctions } from '../../../utils/';

const ViewTaskPage = ({ task }) => {
    
    const router = useRouter();

    const handleDelete = async (id) => {
        const res = await axios.delete('/api/task/' + id)
        router.push('/task/')
    } 


    return (
        <Layout>
            <div className='flex justify-between'>
                <Link key={task.id} href="/task/" >
                <a className="m-10 text-sm underline underline-offset-4 decoration-sky-500 hover:decoration-sky-600">🔙 Go to Back</a></Link>
                <h1 className='text-3xl m-10'>This is your Task!</h1>
            </div>
            <div className='border border-gray-200 shadow-md p-6 m-5 bg-white'>
                <div className='flex justify-between mb-5'>
                    <button className='bg-gray-200 hover:bg-gray-300 px-3 rounded-full' onClick={() => router.push('/task/edit/' + task.id)}>✏️</button>
                    <button className='bg-red-500 hover:bg-red-600 py-2 px-3 rounded-full' onClick={() => handleDelete(task.id)}>🗑️</button>
                </div>
                <div key={task.id} className="my-5 mx-3 bg-white">
          
                <div className="flex justify-between mb-3">
                    <div>
                    <h4 className="text-zinc-900">Responsible: <span className="font-bold"> {task.responsible}</span>.</h4>
                    <p className="text-neutral-500 text-sm">{dateFunctions.getFortmatDistanceToNow( task.createdAT )}</p>
                    </div>
                    <div></div>
                </div>
                <div>
                    <h1 className="text-black text-xl">{task.title}</h1>
                    <hr />
                    <p className="mt-3 text-neutral-900 text-x">{task.description}</p>
                </div>
                
                <div className="flex justify-between mt-5">
                    <p>State: <span className="font-bold">{task.status}</span>.</p>
                    <p>{new Date(task.createdAT).toLocaleDateString()}</p>
                </div>
                </div>
            </div>
            <br />
            <br />
            
        </Layout>
  )
}

export const getServerSideProps = async (ctx) => {

    const { data: task } = await axios.get('https://task-brainon24.vercel.app/api/task/' + ctx.query.id)

    if(!task) {
        return{
            redirect: {
                destination: '/task',
                permanent: false,
            }
        }
    }

    return {
        props: {
            task,
        }, 
    }

}

export default ViewTaskPage