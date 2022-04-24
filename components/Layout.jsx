import Head from "next/head";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import style from './Layout.module.css';

export const Layout = ({ children, title }) => {
  return (
    <div className="bg-gray-100 pt-7 sahdow-md rounded h-screen">
      <Head>
        <title>{title || "brainon24 Tasks"}</title>
        <meta name="author" content="David Diaz H" />
        <meta name="description" content={`Info de la tarea ${title}`} />
        <meta
          name="keywords"
          content={`task, taskeo, tareas, productividad, ${title}`}
        />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre la tarea ${title}`}
        />
        {/* <meta property="og:image" content={`${origin}/banner.png`} /> */}
      </Head>
      {/* <div className="container mx-auto h-full relative overflow-y-auto">
          <Navbar />
          {children}
        </div>
        <Footer /> */}

      <main className=" bg-slate-100 w-full h-full flex flex-col ">
        <div className="  flex flex-col justify-center my-auto w-full h-full overflow-y-auto">
          <div className="w-full h-full">
            <Navbar />
            <div className={ style.children }>
              {children}

            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};
