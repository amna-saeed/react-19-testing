import { useEffect, useState } from "react";

function Student(){
     
    const [user , setUsers]  = useState({});

    const studentList  = async()=>{
        try{
            const url =  "https://dummyjson.com/users/1";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await response.json();
            setUsers(data)
        }catch (error){
            console.log(error)
        }
    };
    
    useEffect(()=>{
        studentList();
    },[])
    return(
        <>
            <h1>Students</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Maiden Name: {user.maidenName}</p>
            <p>Gender: {user.gender}</p>
            <p>Number: {user.phone}</p>
            <p>Password: {user.password}</p>
            
        </>
    )
}
export default Student; 