import { Suspense, use } from "react";

const fetchUser = ()=> fetch("https://dummyjson.com/users/5"). then((response)=> response.json())
const singleUser = fetchUser();

export default function Visa(){

    return(
        <>
            <Suspense fallback={<h2>...LOADING...</h2>}>
                <Users showUser={singleUser} />
            </Suspense>

        </>
    )
}

const Users= ({showUser})=>{

    const userList = use(showUser)
    console.log(userList);
    

    return(
        <>
            {userList.firstName}, {userList.lastName}, {userList.email}
        </>
    )
}
