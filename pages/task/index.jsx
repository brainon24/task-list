import axios from 'axios'
import { Layout } from '../../components/Layout'

const Handler = ({ tasks }) => {
  return (
    <Layout>
      {
        tasks.map(task => (
          <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
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