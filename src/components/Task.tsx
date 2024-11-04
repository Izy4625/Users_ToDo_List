import { useContext } from "react"
import { TasksContext } from "./TaskListContext"
import { useParams } from "react-router-dom"
import styles from "./Task.module.css"

const Task = () => {
    const context = useContext(TasksContext)
    if(!context) return null
    const {tasks} = context

      const { id } = useParams();
    if (!id) return null
    const task = tasks.filter(item=> item.id === parseInt(id))
  return (
    <div className={styles.container}>
        <p>Task For You Today</p>
        <p>{task[0].title}</p>
        {task[0].completed? <p style={{color: 'green'}}>Complted</p>:<p style={{color: 'red'}} >Not Completed</p>}
    </div>
  )
}

export default Task