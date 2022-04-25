import { useState } from "react";
import axios from "axios";
import { Layout } from "../../../components/Layout";
import Link from "next/link";
import { dateFunctions } from '../../../utils';

const Handler = ({ tasks }) => { 

  const [filtroClient, setFiltroClient] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  
  return (
    <Layout>
      <input type="text" placeholder="Filter with Name of Client" className="shadow border rounded py-2 px-3 text-gray-800 my-3 w-full " onChange={(e) => setFiltroClient(e.target.value.toLowerCase())} />
      <input type="text" placeholder="Filter with Status of Task" className="shadow border rounded py-2 px-3 text-gray-800 mb-3 w-full " onChange={(e) => setFiltroStatus(e.target.value.toLowerCase())} />

      {tasks && tasks.filter(task => task.client.toLowerCase().includes(filtroClient) && task.status.toLowerCase().includes(filtroStatus)).map((task) => (
        <div key={task.id} className=" border border-gray-200 shadow-md p-6 m-5 bg-white">

          <div className="flex justify-between mb-3">
            <div>
              <h4 className="text-zinc-900">Responsible: <span className="font-bold"> {task.responsible} · </span>Client: <span className="font-bold">{task.client}</span>.</h4>
              <p className="text-neutral-500 text-sm">{dateFunctions.getFortmatDistanceToNow( task.createdAT )}</p>
            </div>
            <Link key={task.id} href={`/task/id/${task.id}`}>
              <a className="underline underline-offset-4 decoration-sky-500 hover:decoration-sky-600 mb-3 text-sm">🔜 Go</a>
            </Link>
          </div>
          <div>
            <h1 className="text-black text-xl">{task.title}</h1>
            <hr />
            <p className="mt-3 text-neutral-900 text-x">{task.description.length >= 90 ? task.description.substring(0, 90) + '...' : task.description}</p>
          </div>
          
          <div className="flex justify-between mt-5">
            <p>State: <span className="font-bold">{task.status}</span>.</p>
            <p>{new Date(task.createdAT).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { data: tasks } = await axios.get("https://task-brainon24.vercel.app/api/task");

  //const { data: tasks } = await axios.get("http://localhost:3000/api/task");

  return {
    props: {
      tasks,
    },
  };
};

export default Handler;
