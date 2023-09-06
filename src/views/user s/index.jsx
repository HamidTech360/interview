import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        (async()=>{
            try {
                const {data} = axios.get(apiUrl)
                setUsers(data)
                console.log(data);
                
            } catch (error) {
                
            }finally{
                setIsLoading(false)
            }
        })()
    }, [])

    
    return ( 
        <div>
            {
               users?.map((item, i)=>
                <>
                <div>{item?.name}</div>
                </>
               )
            }
        </div>
     );
}
 
export default UserList;