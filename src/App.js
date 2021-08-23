import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBarComponent";
import Counters from "./components/countersComponent";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
