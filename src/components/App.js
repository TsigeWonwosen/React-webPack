import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import BoxColor from "./boxColorSelector/BoxColor";
import Employee from "./employees/Employee";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Main />
        <BoxColor/>
      </main>
      <Employee/>
      <Footer/>
    </div>
  );
}
