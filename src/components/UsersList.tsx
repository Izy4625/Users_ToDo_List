import User from "../models/userInterface"
import { useContext} from "react"
import { UsersContext } from "./UsersContext"
import { useNavigate } from "react-router-dom"
import styles from "./UsersList.module.css"
const UsersList = () => {


    const navigate = useNavigate();
    const context = useContext(UsersContext)
    if(!context) return null;
    const {users} = context
      function handleDetails(id: number){
        navigate(`user/${id}`)
      }

  return (
    <div className={styles.container}>
        <ul>
            {users.map((item) => (<li className={styles.item} onClick={(e)=>(handleDetails(item.id))}>{item.name}</li>))}
        </ul>
    </div>
  )
}

export default UsersList
