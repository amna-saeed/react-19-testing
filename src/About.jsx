import { useEffect } from "react";

function About(){
    
    const getUserLogin = async()=>{
        const token = localStorage.getItem('token');

        try{
            const url = "https://dummyjson.com/auth/me"  
            const response = await fetch (url , {
                method: 'GET',
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
                
            });
            const result = await response.json();
            console.log(result);
            
        }catch (error) {
            console.log(error)
        }   
    }
     useEffect(()=>{
        getUserLogin();
     },[])
    return(
        <>
            <h1>About</h1>
        </>
    )
}
export default About;