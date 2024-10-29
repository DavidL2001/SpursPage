import React from "react";
import '../App.css';
import oldwhl from "../assets/oldwhl.jpg";
import newwhl from "../assets/newwhl.jpg";

const Stadium = () => {
  const stadiums = [
    {
      image: oldwhl,
      info: "The iconic venue hosted Tottenham's home games for over 118 years, having officially opened in 1899. Over the years, White Hart Lane underwent several renovations and expansions. The stadium's final seating capacity was around 36,284. Tottenham Hotspurs last game on the stadium was the 14th of may 2017 with a 2-1 victory over Manchester United."
    },
    {
      image: newwhl,
      info: "Tottenham Hotspur Stadium is the home of Premier League club Tottenham Hotspur in north London, replacing the club's previous ground, White Hart Lane. With a seating capacity of 62,850, it is the 3rd largest football stadium in England and the largest club ground in London. It is designed to be a multi-purpose stadium and is the home of the NFL in the UK. It features the world's first dividing, retractable football pitch, which reveals a synthetic turf field underneath for NFL London Games, concerts and other events."
    }
  ];

  return (
    <section id="stadium" className="Stadium">
      <div>
        <h2>Stadiums</h2>
        <div className="stadium-container">
          {stadiums.map((stadium, index) => (
            <div key={index} className="stadium-card">
              <img src={stadium.image} alt="Stadium Image" className="stadium-image" />
              <p className="stadium-info">{stadium.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stadium;
