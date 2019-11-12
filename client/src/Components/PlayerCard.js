import React, {useEffect, useState} from 'react';

function PlayerCard(props) {
    const [player, setPlayer] = useState(props.player);

  return (
      <div>
      <div>{player.name}</div>
      <div>{player.country}</div>
      <div>{player.searches}</div>
      </div>
    );
}

export default PlayerCard;