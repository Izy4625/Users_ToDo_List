
import { useParams ,useNavigate} from "react-router-dom"
import { UsersContext } from "./UsersContext"
import { useContext } from "react"
import styles from "./user.module.css"


const UserDetails = () => {
    const navigate = useNavigate()
    const contextUsers = useContext(UsersContext)
    
    if (!contextUsers) return null
  
    const { users,error } = contextUsers
   
    const { id } = useParams();
    if (!id) return null
    if(error){
        console.log(error);
        
    }
    
    const user = users.filter(item => item.id === parseInt(id))
    console.log(user)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.detailcontainer}>
                    <p className={styles.name}>{user[0].name}</p>
                    <div className={styles.divbutton}>
                  <button onClick={()=> navigate(`/tasks/${id}`)}> View Tasks</button>
                </div>
                    <p>{user[0].email}</p>
                    <p>address: {user[0].address.city} {user[0].address.street} </p>
                    <p>{user[0].phone}</p>
                </div>
              
            </div>
        </>
    )
}


export default UserDetails