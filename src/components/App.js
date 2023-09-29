import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import { HashRouter as Router BrowserRouter } from 'react-router-dom';

import About from './pages/About'
import Home from './pages/Home'
import Main from './pages/Admin'
import Error from './pages/Error'
import Contact from "./pages/Contact";
import LayOut from "./pages/LayOut";
import Posts from "./pages/post/Posts";
import SinglePost from "./pages/post/SinglePost";
import EditEmployee from "./employees/EditEmployee";
import { EmployeeContextProvider } from "../context/EmployeeContextProvider";
import EmployeeHome from "./employees/EmployeeHome";
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";
import EmployeeInfo from "./employees/EmployeeInfo";
import AuthProvider from "../context/AuthProvider";
import RequireAuth from "./employees/RequireAuth";
import Unauthorized from "./employees/Unauthorized";

const ROLES = {
  'User': 2001,
  'Editor': 3001,
  'Admin': 4001
}

export default function App() {
  return (
    <div className="app">
      <EmployeeContextProvider>
        <AuthProvider>
          <Router>
            <Routes>
                <Route path="/" element={<LayOut />}>
                  <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                  <Route path="posts" >
                    <Route index element={<Posts />} />
                    <Route path=":id" element={<SinglePost />} />
                  </Route>
                <Route path="contact" element={<Contact />} />
                <Route path="unauthorized" element={<Unauthorized />} />
               
                <Route element={<RequireAuth allowedRoles={[ROLES.Admin,ROLES.Editor]}/>}>
                  <Route path="/admin/" element={<EmployeeHome />}/>
                  <Route path="/admin/:id" element={<EditEmployee />} />
                  <Route path="/admin/single/:id" element={<EmployeeInfo />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                   <Route path="signup" element={<Register />} />
                </Route>

                <Route path="*" element={<Error/>} />
                </Route>
          </Routes>
          </Router>
        </AuthProvider>
    </EmployeeContextProvider>
    </div>
  );
}
