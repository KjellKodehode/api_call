import React, { useState, useEffect } from "react";

const App = () => {
  // set the joke and delivery const
  const [joke, setJoke] = useState("");
  const [delivery, setDelivery] = useState("");

  useEffect(() => {
    // only fetching two part jokes
    const url = "https://v2.jokeapi.dev/joke/Any?type=twopart";
    // fetching the api
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // set the joke from api
        setJoke(json.setup);
        setDelivery(json.delivery);
        // print error and prevent crash
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="joke">
      <h3 className="joke-setup">{joke}</h3>
      {/* <button className="btn-answer">Tell me now !</button> */}
      <h2 className="joke-delivery">{delivery}</h2>
      <div className="container-btn">
        <button id="btn-more">One More !</button>
      </div>
    </div>
  );
};

export default App;
