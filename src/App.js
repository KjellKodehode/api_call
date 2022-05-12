// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState, useEffect } from "react";
import Joke from "./components/Joke.jsx";

function App() {
  return (
    <div className="container">
      <div>
        <Joke />
        <button className="btn-more">One More</button>
      </div>
    </div>
  );
}

export default App;
