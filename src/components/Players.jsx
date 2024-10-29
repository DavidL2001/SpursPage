import React from "react"
import '../App.css'
import player1 from "../assets/player1.jpg";
import player2 from "../assets/player2.jpg";
import player3 from "../assets/player3.jpg";
import player4 from "../assets/player4.jpg";
import player5 from "../assets/player5.jpg";
import player6 from "../assets/player6.jpg";
import player7 from "../assets/player7.jpg";
import player8 from "../assets/player8.jpg";
import player9 from "../assets/player9.jpg";
import player10 from "../assets/player10.jpg";
import player11 from "../assets/player11.jpg";

import legend1 from "../assets/legend1.jpg";
import legend2 from "../assets/legend2.jpg";
import legend3 from "../assets/legend3.jpg";
import legend4 from "../assets/legend4.jpg";
import legend5 from "../assets/legend5.jpg";
import legend6 from "../assets/legend6.jpg";
import legend7 from "../assets/legend7.jpg";
import legend8 from "../assets/legend8.jpg";
import legend9 from "../assets/legend9.jpg";
import legend10 from "../assets/legend10.jpg";
import legend11 from "../assets/legend11.jpg";



const Players = () => {
    const currentPlayers = [
      { name: "Vicario", image: player1},
      { name: "Porro", image: player2},
      { name: "Romero", image: player3},
      { name: "Van De Ven", image: player4},
      { name: "Udogie", image: player5},
      { name: "Bentancur", image: player6},
      { name: "Maddison", image: player7},
      { name: "Kulusevski", image: player8},
      { name: "Johnson", image: player9},
      { name: "Son", image: player10},
      { name: "Solanke", image: player11}
    ];

    const legends = [
      { name: "Kane", image: legend1},
      { name: "Bale", image: legend2},
      { name: "King", image: legend3},
      { name: "Gascoigne", image: legend4},
      { name: "Hoddle", image: legend5},
      { name: "Ossie", image: legend6},
      { name: "Villa", image: legend7},
      { name: "Perryman", image: legend8},
      { name: "Lloris", image: legend9},
      { name: "Greaves", image: legend10},
      { name: "Blanchflower", image: legend11},
    ];

  return (
    <section id="players" className="Players">
        <div className="player-list">
          <h2>Current players</h2>
            <div className="scroll-container">
              {currentPlayers.map((player, index) => (
                <div key={index} className="player-card">
                    <img src={player.image} alt={player.name} className="player-image" />
                    <p className="player-name">{player.name}</p>
                </div>
              ))}
            </div>
        </div>

        <div className="player-list">
          <h2>Legends</h2>
            <div className="scroll-container">
              {legends.map((legend, index) => (
                <div key={index} className="player-card">
                    <img src={legend.image} alt={legend.name} className="player-image" />
                    <p className="player-name">{legend.name}</p>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Players; 
