import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import About from "../../About";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);
  console.log(user);
  return (
    <>
      <h6>Usrer: {user.length}</h6>
      {
        user.map(user=><About user={user}/>)
        
      }
    </>
  );
};

export default Home;
