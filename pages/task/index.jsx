import axios from 'axios'
import { Layout } from '../../components/Layout'
import Link from 'next/link'

const Handler = ({ tasks }) => {

  return (
    <Layout>
      {
        tasks.map(task => (
          <Link key={task.id} href={`/task/id/${task.id}`}>
            <a>
              <div>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
              </div>
            </a>
          </Link>
          
        ))
      }
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {

  const { data: tasks } = await axios.get('http://localhost:3000/api/task');

  return{
    props: {
      tasks
    }
  }

}


export default Handler;