import { Layout } from '../../components/Layout'
import TaskForm from '../../components/TaskForm'

const NewTaskPage = () => {
  return (
    <div>
        <Layout>
          <div>
            <TaskForm />
          </div>
        </Layout>
    </div>
  )
}

export default NewTaskPage;