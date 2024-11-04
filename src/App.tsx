import UsersList from "./components/UsersList"
import { Link, Routes, Route } from "react-router-dom"
import UsersContextProvider from "./components/UsersContext"
import TasksContextProvider from "./components/TaskListContext"
import UserDetails from "./components/User"
import UserTaskList from "./components/TaskList"
import Task from "./components/Task"
import "./App.css"
function App() {


  return (
    <>
      <header>
      <nav>
        <Link className="home" to="/">Home</Link>
      </nav>

      </header>
     
      <UsersContextProvider>
        <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="user/:id" element={<UserDetails />} /> {/* מסלול דינמי */}
        </Routes>
        </UsersContextProvider>
        <TasksContextProvider>
          <Routes>
            <Route path="tasks/:id" element={<UserTaskList />} /> {/* מסלול דינמי */}
            <Route path="task/:id" element={<Task />} /> {/* מסלול דינמי */}
          </Routes>
        </TasksContextProvider>
  
    </>



  )
}

export default App
