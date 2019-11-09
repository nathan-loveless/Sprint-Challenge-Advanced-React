import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard.js';

function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/players")
          .then(res => setPlayers(res.data))
          .catch(err => console.log(err));
      }, []);
  
  return (
    <div>
    {players.map(player => (
        <PlayerCard player = {player}/>
))}
</div>  
);
}

export default Players;