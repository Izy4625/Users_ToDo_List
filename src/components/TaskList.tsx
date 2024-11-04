
import { useContext } from "react"
import { TasksContext } from "./TaskListContext"
import { useParams,useNavigate } from "react-router-dom"
import styles from "./TaskList.module.css"


const UserTaskList = () => {
    
    const navigate = useNavigate()
    const contextTasks = useContext(TasksContext)

    if (!contextTasks) return null
    const { tasks, setId } = contextTasks

    const { id } = useParams();
    if (!id) return null

    setId(parseInt(id))

    return (

        <div className={styles.container}>
            <p>Tasks</p>
            <ul>
                {tasks.map((item) => (<li className={styles.item} onClick={()=> navigate(`/task/${item.id}`)}>{item.title}</li>))}
            </ul>
        </div>
    )

}

export default UserTaskList