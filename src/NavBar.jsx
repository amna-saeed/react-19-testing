import { NavLink, Outlet } from "react-router";
import './header.css'
function NavBar(){
    const logo = './vite.svg'
    return(
        <>
            <div className="header">
                <div>
                    <NavLink to="/">
                        <h1><img src={logo} /></h1> 
                    </NavLink>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive})=> isActive ? "active" : "" }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="user/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/college" className={({ isActive }) => isActive ? "active" : ""}>College</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user" className={({ isActive }) => isActive ? "active" : ""}>User</NavLink>
                        </li>
                    </ul>
                </div>      
            </div>
            <Outlet />
        </>
    )
}
export default NavBar;