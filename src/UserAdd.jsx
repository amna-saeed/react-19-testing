import { useState } from "react";
import { NavLink, useNavigate  } from "react-router";

function UserAdd(){
    const[userData, setUserData] = useState({
        name: '',
        age: '',
        email: '',
    });
    const handleUser= (e)=>{
       setUserData({
        ...userData,
        [e.target.name] : e.target.value
       })
    }
      const navigate = useNavigate();
    const createUser = async()=>{
        try{
            const url = "http://localhost:3000/users"
            const response = await fetch(url,{
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const result = await response.json()
            navigate("/");
            console.log(result);
        }catch (error){
            console.log(error)
        }
    }
    return(
        <>
           
            <hr/>
            <div style={{textAlign: 'center', margin: '20px'}}>
                <h1>here add user</h1>
                <NavLink to="/" >Go To Home</NavLink>
            </div>
            <div className="form-box">
                <input value={userData.name} name="name" onChange={handleUser} type="text" placeholder="Enter User Name" className="from-wrap" />
                <input value={userData.age} name="age" onChange={handleUser} type="text" placeholder="Enter User Age" className="from-wrap" />
                <input value={userData.email} name="email" onChange={handleUser} type="text" placeholder="Enter User Email" className="from-wrap" />
                <button onClick={createUser} className="bg-red-700 text-white py-2 ">Add User</button>
            </div>
        </>
    )   
}
export default UserAdd;
