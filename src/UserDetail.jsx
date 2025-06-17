import {  useParams } from "react-router";
import { Link } from "react-router";
function UserDetail(){

    const paramsData = useParams();
    console.log(paramsData.id);

    // const location = useLocation();
    // const name = location.state?.name || "Unknown User"
    
    return(
        <>
            <h1>User Detail</h1>
            <h2>
                User Id Is: {paramsData.id} 
            </h2>
            <h2>
                User name: {paramsData.name} 
            </h2>
            <h1><Link to="/user" >Back</Link></h1>

        </>
    )
}
export default UserDetail;

