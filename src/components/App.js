import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import BoxColor from "./boxColorSelector/BoxColor";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Main />
        <BoxColor/>
      </main>
      <Footer/>
    </div>
  );
}
