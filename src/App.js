// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState, useEffect } from "react";
import Joke from "./components/Joke.jsx";
import "./assets/css/fonts.css";

function App() {
  return (
    <div className="container">
      <div>
        <Joke />
      </div>
      <div className="container-btn">
        {/* <button onClick={} id="btn-more">
          One More !
        </button> */}
      </div>
    </div>
  );
}

export default App;