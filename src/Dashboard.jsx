import { use, useEffect, useState } from "react";
import { Outlet } from "react-router";
import './header.css'

function Dashboard(){

    const [searchUser, setSearchUser] = useState([]);

    const searchList = async()=>{
        try{
            const url = "https://dummyjson.com/users/search?q=John";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-type" : "Application/json"
                }
            })
            const search = await response.json();
            setSearchUser(search.users);
            console.log(search.users);
        }catch (error){
            console.log(error)
        }
    }

    const [form, setForm] = useState({
        name: "",
        password: ""
    });
    const [nameErr, setNameErr] = useState("");

    const handleForm = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'name' && e.target.value.length > 5) {
            setNameErr("Please enter valid character. only 5");
        } else {
            setNameErr('')
        }
    }
    return(
        <>  
         <br /> <br />
            <div>
                <input value={form.name} name="name" className={nameErr? 'error': ''} onChange={handleForm} placeholder="name"/>
                <span> {nameErr && nameErr} </span>
                 <br /> <br />
                <input value={form.password} name="password" onChange={handleForm} placeholder="password"/>
                <span> {nameErr && nameErr} </span>
                <br /><br />
                <button>Login</button>
            </div>
            <br /> <br />
            <hr />
            <h1>Dashboard</h1>

            <button onClick={searchList}>SearchList</button>
            <div>
                {
                    searchUser.map((user, index) => (
                        <p key={index}>{user.firstName} {user.lastName}</p>
                    ))
                }
            </div>
            <Outlet />
        </>
    )
}
export default Dashboard;