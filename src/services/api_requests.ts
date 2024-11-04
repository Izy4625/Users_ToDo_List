import axios from 'axios';
import User from "../models/userInterface"
import Task from "../models/taskInterface"


const Base_Url = "https://jsonplaceholder.typicode.com/"
export const fetchUsers = async () :Promise<User[]>=> {
   try{
    const response = await axios.get(`${Base_Url}users`)
    console.log(response.data)
    return response.data
   }
   catch(err){
    console.log("error fetching users" + err)
   
   }
}
export const fetchTasks = async (id: number) :Promise<Task[]>=> {
    try{
     const response = await axios.get(`${Base_Url}todos/?userId=${id}`)
     return response.data
    }
    catch(err){
     console.log("error fetching users" + err)
     return null
    }
 }