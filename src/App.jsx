import {Route, Routes, Navigate} from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
import NotFound from "./NotFound"
import College from "./College"
import Student from "./Student"
import Department from "./Department"
import Dashboard from "./Dashboard"
import User from "./User"
import UserDetail from "./UserDetail"
import UserAdd from "./UserAdd"
import EditUser from "./EditUser"
import Visa from "./Visa"
import Practice from "./Practice"
import Colors from "./Colors"


function App() {
  return (
    <>
      <Routes>
          <Route element={ <NavBar /> }>
              <Route path="/" element={ <Home />} />
              <Route path="/about" element={ <About />} />
              <Route path="user/login" element={ <Login />} />
              <Route path="/user" element={ <User />} />
              <Route path="/user/:id/:name?" element={ <UserDetail />} /> 
              <Route path="/add" element={ <UserAdd />} /> 
              <Route path="/edit-user/:id" element={ <EditUser />} /> 
              <Route path="/visa" element={ <Visa />} /> 
              <Route path="/practice" element={ <Practice />} /> 
              <Route path="/colors" element={ <Colors />} /> 
          </Route>
          
          {/* nested routes */}
          <Route path="/college" element={ <College />}>
              <Route index path="student" element={<Student />} />
              <Route path="department" element={<Department />} />
              <Route path="dashboard" element={<Dashboard />} />
          </Route>
         
          <Route path="/*" element={ <NotFound />} />
          {/* <Route path='/*' element={ <Navigate to="/about" />} /> */}
      </Routes>
    </>
  )
}

export default App
