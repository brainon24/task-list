import Head from "next/head"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = ({ children, title }) => {
  return (
    <div className='bg-gray-100 p-10 sahdow-md rounded h-screen'>
        <Head>
            <title>{title || "Task List"}</title>
            <meta name="author" content="David Diaz H"/>
            <meta name="description" content={`Info de la tarea ${ title }`}/>
            <meta name="keywords" content={`task, taskeo, tareas, productividad, ${ title }`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre la tarea ${ title }`} />
            {/* <meta property="og:image" content={`${origin}/banner.png`} /> */}
        </Head>
        <div className="container mx-auto hfull">
          <Navbar />
          {children}
          <Footer />
        </div>
    </div>
  )
}
