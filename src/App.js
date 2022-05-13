// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState, useEffect } from "react";
// import Joke from "./components/Joke.jsx";
import JokeApp from "./components/GetJoke.jsx";
import "./assets/css/fonts.css";

function App() {
  return (
    <div className="container">
      <div>
        {/* <Joke /> */}
        <JokeApp />
      </div>
    </div>
  );
}

export default App;
