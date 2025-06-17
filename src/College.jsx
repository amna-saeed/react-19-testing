import { NavLink, Outlet, Link } from "react-router";
function College(){

    return(
        <>
            <div className="college" style={{textAlign: 'center'}}>
                <h1>College Page</h1>
                <div style={{marginBottom: '20px'}}>
                    <Link to="/" style={{textAlign: 'center', marginBottom: '12px'}}>Go To Home Page</Link>
                </div>
                <NavLink to="student" className="link">Student</NavLink>
                <NavLink to="department" className="link">Department</NavLink>
                <NavLink to="dashboard" className="link">Dashboard</NavLink>
                <Outlet />
            </div>
        </>
    )
}
export default College;
