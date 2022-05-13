import React, { useState, useEffect } from "react";
import axios from "axios";

export default function JokeApp() {
  const [posts, setPosts] = useState([]);
  // trying axios
  const fetchPost = async () => {
    const response = await axios("https://v2.jokeapi.dev/joke/Any?type=single");
    console.log(response);
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="joke">
      <h3 className="joke-single">{posts.joke}</h3>
      <div className="container-btn">
        <button id="btn-more" onClick={fetchPost}>
          Get new joke
        </button>
      </div>
    </div>
  );
}
