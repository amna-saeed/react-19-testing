import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router";
const Login = lazy(()=> import ('./Login'))

function User(){

    // const userList = [
    //     {id: 1 , name:'amna'},
    //     {id: 2, name:'ayesha'},
    //     {id: 3, name:'abeera'},
    //     {id: 4, name:'asma'},
    //     {id: 5, name:'sidra'},
    //     {id: 6, name:'fatima'},
    //     {id: 7, name:'kashaf'},
    // ]
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        getUsersData()
    }, []);

    async function getUsersData (){
        const url = "https://dummyjson.com/user";
        let response = await fetch(url);
        response = await response.json();
        setUserData(response.users)
        
    }
    const [dataList , setDataList] = useState()
    useEffect(()=>{
        getDataList();
    },[])
    async function getDataList(){
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await response.json();
            setDataList(user);
        }catch (error){
            console.log(error)
        }
    }
 console.log(userData);

    const [load, setLoad] =useState(false)
    const handleLoad =()=>{
        console.log(load);
        setLoad(true)
    }
    return(
        <>  
            <br />

            {
                load? <Suspense fallback={<h3>...loading</h3>}> <Login /> </Suspense> : null
            }
            <button onClick={handleLoad}>load</button>
            
            <hr />
            <br />
            <p>Single list</p>
            <ul>
                {
                    dataList && <p>{dataList.username} - {dataList.name} </p>
                }
            
            </ul>
            <hr />
            <p>FETCH DATA FROM API</p>
            {
                userData.map((user,pIndex)=> (
                    <h2 key={pIndex}> FirstName:{user.firstName} - LastName:{user.lastName} - Mid Name:{user.maidenName} - Age: {user.age}</h2>
                ))
            }
            <h1>User List</h1>
            {/* <ul>
                {
                    userList.map((user,id) =>(
                        <li key={id}> <Link to={"/user/" + user.id}> {user.name} - {user.id} </Link></li>
                    ))
                }
            </ul>
            <hr />
            <ul>
                {
                    userList.map((user,id) =>(
                        <li key={id}> <Link to={"/user/" + user.id + "/"+ user.name} > {user.name}</Link></li>
                    ))
                }
            </ul> */}
        </>
    )
}
export default User;