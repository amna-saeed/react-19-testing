import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams  } from "react-router";

function EditUser(){
    const[formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
    });
    const navigate = useNavigate();
    const {id} =useParams();

    const getEdit = async()=>{
        try{
            const url = "http://localhost:3000/users/" +id;
            const response = await fetch(url,{
                method: 'Get',
                headers:{
                    "Content-type" : "Application/json"
                }
            })
            const userData = await response.json()
            setFormData({
                name: userData.name,
                age: userData.age,
                email: userData.email
            })
            console.log(formData)
        }catch (error){
            console.log(error)
        }
    }

    // commponent mount & dependency change
    useEffect(()=>{
        getEdit();
    },[])

    const handleUser = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
    const updateUser =async()=>{
        try{
            const url="http://localhost:3000/users/" +id;
            const response = await fetch(url,{
                method: 'PUT',
                headers:{
                    "Content-type" : "Application/json"
                },
                body : JSON.stringify(formData)
            });
            if (response.ok){
                alert("user update successfully")
                navigate("/")
            }else{
                alert("error")
            }
        }catch (error){ 
            console.log(error)
        }
    }

    return(
        <>
            <div style={{textAlign: 'center', margin: '20px'}}>
                <h1>here edit user</h1>
                <NavLink to="/" >Go To Home</NavLink>
            </div>
            <div className="form-box">
                <input value={formData.name} name="name" onChange={handleUser} type="text" placeholder="Enter User Name" className="from-wrap" />
                <input value={formData.age} name="age" onChange={handleUser} type="text" placeholder="Enter User Age" className="from-wrap" />
                <input value={formData.email} name="email" onChange={handleUser} type="text" placeholder="Enter User Email" className="from-wrap" />
                <button onClick={updateUser} className="bg-red-700 text-white py-2 ">Update User</button>
            </div>
        </>
    )   
}
export default EditUser;
