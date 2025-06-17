import { useEffect, useState} from "react";
import { NavLink, Outlet } from "react-router";
import { useNavigate } from "react-router";

function Home(){

    const [users, setUsers] =useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getUsers();
    },[])

    async function getUsers() {
        try{
            const url ="http://localhost:3000/users";
            const response = await fetch (url, {
                method: 'GET',
                headers:{
                    "Content-Type": "Application/json"
                }
            })
            const userss = await response.json()
            setUsers(userss)
        }catch (error){
            console.log(error)
        }
    }

    const deleteUser = async(id)=>{
        try{

            const url = `http://localhost:3000/users/${id}`;
            const response = await fetch (url,{
                method: 'Delete',
                headers: {
                    "Content-Type" : "Application/json"
                }
            })
            if(response.ok){
                setUsers(prevUsers => prevUsers.filter(user =>user.id !== id));
                alert("row deleted")
            }else{
                alert("failed")
            }
        }catch (error){
            console.log(error)
        }
    }

    const editUser = (id)=>{
        navigate("/edit-user/" +id)
    }
    return(
        <>
            <div style={{textAlign: 'center', margin: '20px'}}>
                <h1 className="text-3xl font-bold underline bg-red-400">User List</h1>
                <ul>
                    <li className="text-1xl font-bold underline m-4" > 
                        <NavLink to="/" className="p-2">Home</NavLink>
                        <NavLink to="/add" className="p-2">Add User</NavLink>
                    </li>
                </ul>
                <ul>
                    {
                        users.map((user, index)=> (
                            <li key={index}> User Name <span style={{color: 'green', fontSize: '18px', fontWeight: 'bold', margin: '20px'}}>{user.name} </span> - 
                                User Age: <span style={{color: 'green', fontSize: '18px', fontWeight: 'bold', margin: '20px'}}>{user.age}</span> - 
                                User Email: <span style={{color: 'green', fontSize: '18px', fontWeight: 'bold', margin: '20px'}}>{user.email} </span> 
                                <button onClick={()=> deleteUser(user.id)} className="bg-red-600 text-white px-2 py-1 ml-4">Delete</button>
                                <button onClick={()=> editUser(user.id)} className="bg-blue-600 text-white px-2 py-1 ml-4">Edit</button>
                            </li>
                           
                        ))
                    }
                </ul>
                <Outlet/>
            </div>
        </>
    )
}
export default Home;