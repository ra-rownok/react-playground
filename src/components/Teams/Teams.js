import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import "./Teams.css";

const Teams = () => {
  const [first, setFirst] = useState([]);  
  const [cart,setCart] = useState([])
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setFirst(data));
  }, []);

  const addPlayer = player => {
    const listedPlayer = [...cart, player]
    setCart(listedPlayer)
  }

  let totalCost = 0
  for(const player of cart){
    totalCost = totalCost + player.salary
  }

  return (
    
    <div className="root">
      <div className="teams">
        {first.map((team) => (
          <Team key={team._id} team={team} addPlayer={addPlayer}/>
        ))}
      </div>
      <div className="title-top">
        <h1 className="title">Players Added: {cart.length}</h1>
        <h2 className="title">Total Cost: ${totalCost}</h2>
      </div>
    </div>
  );
};

export default Teams;
