import { Link } from "react-router";

function NotFound(){
    const errorImg = "./Error-404.png"
    return(
        <>
            <div style={{textAlign: 'center'}}>
                <h1>Page Not Found</h1>
                <Link to="/" style={{textAlign: 'center'}}>Go To Home Page</Link>
            </div>
            <div style={{textAlign: 'center', margin: '20px'}}>
                <img style={{width: "50%" }} src={errorImg} />
            </div>
        </>
    )
}
export default NotFound;