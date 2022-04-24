import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/Layout";
import imgTODO from '../public/istockphoto-1186910494-170667a.jpeg';

function HomePage() {
  return (
    <Layout>
      <div className="flex justify-between bg-sky-500 text-white mt-2 py-5 px-10 text-2xl">
        <p></p>
        <h1 className="">brainon24 Tasks! 📚📖</h1>
      </div>
      <main className="px-10">
        <div className="p-5 text-center">
          <p className="p-5">
            Welcome, this is a Aplication built for management of task.
          </p>
          <Image src={imgTODO} alt="Todo list" />
          <br />
          <br />
          <Link href="/task/new">
            <a className="underline hover:no-underline">
              Create Task!
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage;