import axios from "axios";
import { Layout } from "../../components/Layout";
import Link from "next/link";

const Handler = ({ tasks }) => {
  return (
    <Layout>
      {tasks.map((task) => (
        <div className=" border border-gray-200 shadow-md p-6 m-5 bg-white">
          <div className="flex justify-between">
            <div></div>
            <Link key={task.id} href={`/task/id/${task.id}`}>
              <a className="underline underline-offset-4 decoration-sky-500 hover:decoration-sky-600 mb-3 text-sm">🔜 Go</a>
            </Link>
          </div>
          
          <div>
            <h1 className="text-black">{task.title}</h1>
            <hr />
            <p className="mt-3 text-neutral-600 text-sm">{task.description}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { data: tasks } = await axios.get("http://localhost:3000/api/task");

  return {
    props: {
      tasks,
    },
  };
};

export default Handler;
