import React, { createContext, useState,useEffect } from 'react';
import {fetchTasks} from "../services/api_requests"
import Task from "../models/taskInterface"

interface TasksContextType {
    tasks: Task[]
    setId: (id: number) => void;
    
  }
  interface TasksContextProviderProps {

    children: React.ReactNode;
    
    }

export const TasksContext = createContext<TasksContextType | null>(null);

const TasksContextProvider: React.FC<TasksContextProviderProps> = (props) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [id, setId] = useState(0)
    const [error,setError] = useState<string>("")
    useEffect(() => {
        const loadTasks = async () => {
         
        
          try {
            const fetchedTasks = await fetchTasks(id);

            setTasks(fetchedTasks);
          } catch (err) {
            setError('Failed to load users. Please try again.');
          }
        };
    
        loadTasks();
      }, [id]);
      return (

        <TasksContext.Provider value={{ tasks, setId }}>
        
        {props.children}
        
        </TasksContext.Provider>
        
        );
        
        };
        
        export default TasksContextProvider;
