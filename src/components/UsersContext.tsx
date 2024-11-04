import React, { createContext, useState,useEffect } from 'react';
import {fetchUsers} from "../services/api_requests"
import User from "../models/userInterface"

interface UsersContextType {
    users: User[]
    error: string
    
  
  }
  interface UsersContextProviderProps {

    children: React.ReactNode;
    
    }

export const UsersContext = createContext<UsersContextType | null>(null);

const UsersContextProvider: React.FC<UsersContextProviderProps> = (props) => {
    const [users, setUsers] = useState<User[]>([])
    const [error,setError] = useState<string>("")
    useEffect(() => {
        const loadUsers = async () => {
         
        
          try {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers);
          } catch (err) {
            setError('Failed to load users. Please try again.');
          }
        };
    
        loadUsers();
      }, []);
      return (

        <UsersContext.Provider value={{ users }}>
        
        {props.children}
        
        </UsersContext.Provider>
        
        );
        
        };
        
        export default UsersContextProvider;
