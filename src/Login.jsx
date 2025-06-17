import { useState } from "react";

function Login(){
    const [userLogin, setUserLogin]  = useState({
        username: '',
        password: '',
    })
    const handleLogin= (e)=>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    const loginSubmit = async(e)=>{
        e.preventDefault();
        try{
            const url = "https://dummyjson.com/user/login"; 
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userLogin)
            })
            const result = await response.json();
            console.log(userLogin)
            localStorage.setItem('token' , result.token)
        }catch (error){
            console.log(error)
        }
    }
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={loginSubmit} >
                <input value={userLogin.username} onChange={handleLogin} name="username" type="text" placeholder="Name" />
                <input value={userLogin.password} onChange={handleLogin} name="password" type="text" placeholder="Password" />
                <button>Submit</button>
            </form>
        </>
    )
}
export default Login;