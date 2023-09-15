import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Error from './pages/Error'
import Contact from "./pages/Contact";
import LayOut from "./pages/LayOut";
import Posts from "./pages/post/Posts";
import SinglePost from "./pages/post/SinglePost";
export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
           <Route path="/*" element={<LayOut />}>
              <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="posts"  >
                  <Route index element={<Posts />} />
                  <Route path=":id" element={<SinglePost />} />
            </Route>
            
              <Route path="contact" element={<Contact/>}/>
              <Route path="admin" element={<Admin/>}/>
              <Route path="*" element={<Error/>} />
           </Route>
      </Routes>
      </Router>
    </div>
  );
}
