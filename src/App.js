import React from "react";
import Header from "./Components/Header";
import NavigationMenu from "./Components/NavigationMenu";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <NavigationMenu />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
