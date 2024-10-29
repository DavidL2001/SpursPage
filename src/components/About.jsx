import React, { useState } from 'react';
import '../App.css';
import ownersImage from '../assets/owners.jpg';
import locationImage from '../assets/location.png';
import historyImage from '../assets/bill.jpg';
import pastYearsImage from '../assets/managers.avif';

const About = () => {
  const [activeSection, setActiveSection] = useState(null); 

  const toggleSection = (section) => {
    
    if (activeSection === section) {
      setActiveSection(null);  
    } else {
      setActiveSection(section);  
    }
  };

  return (
    <section id="about" className="About">
    
      <div>
        <ul>
          <li>
            <button className="AboutBtn" onClick={() => toggleSection('owners')}>
              Owners
              <span className="ExtentionBtn">{activeSection === 'owners' ? '-' : '+'}</span>
            </button>
            {activeSection === 'owners' && (
              <p className="collapsible-content">
                The majority shareholder, ENIC International Ltd, is an investment company established by the British billionaire Joe Lewis. Daniel Levy, Lewis's partner at ENIC, is Executive Chairman of the club. They first acquired 29.9% share of the club in 1991, of which 27% was bought from Sugar for £22 million
              </p>
            )}
          </li>
          <li>
            <button className="AboutBtn" onClick={() => toggleSection('location')}>
              Location
              <span className="ExtentionBtn">{activeSection === 'location' ? '-' : '+'}</span>
            </button>
            {activeSection === 'location' && (
              <p className="collapsible-content">
                Tottenham Hotspur Stadium is north-east of Central London, outside of the Congestion Charge zone. The A10/Tottenham High Road runs north-to-south past the stadium, all the way to City/Commercial Road; which runs east-to-west through Central London, past King's Cross and Euston stations.
              </p>
            )}
          </li>
          <li>
            <button className="AboutBtn" onClick={() => toggleSection('history')}>
              Early History
              <span className="ExtentionBtn">{activeSection === 'history' ? '-' : '+'}</span>
            </button>
            {activeSection === 'history' && (
              <p className="collapsible-content">
                Bill Nicholson took over as manager in October 1958. He became the club's most successful manager, guiding the team to major trophy success three seasons in a row in the early 1960s: the Double in 1961, the FA Cup in 1962 and the Cup Winners' Cup in 1963.[29] Nicholson signed Dave Mackay and John White in 1959, two influential players of the Double-winning team, and Jimmy Greaves in 1961, the most prolific goal-scorer in the history of the top tier of English football.
              </p>
            )}
          </li>
          <li>
            <button className="AboutBtn" onClick={() => toggleSection('pastYears')}>
              Past Years
              <span className="ExtentionBtn">{activeSection === 'pastYears' ? '-' : '+'}</span>
            </button>
            {activeSection === 'pastYears' && (
              <p className="collapsible-content">
               Mourinho was sacked in April 2021,[60] while Nuno Espírito Santo lasted just four months as his successor.[61] The next manager, Antonio Conte, guided Spurs to fourth during the 2021–22 season and back to a Champions League place.[62] Following a poor run of form, Conte criticised the players and management of the club in press conferences; after exiting both the Champions League and FA Cup, he departed the club by mutual agreement in March 2023.[63][64] Ange Postecoglou took over as head coach on 1 July 2023[65] and the club qualified for the 2024-25 UEFA Europa League after a fifth-place finish in the Premier League.
              </p>
            )}
          </li>
        </ul>
      </div>

      
      <div className="info-panel">
        {activeSection === 'owners' && (
          <div className="info-image">
            <img src={ownersImage} alt="Owners" />
          </div>
        )}
        {activeSection === 'location' && (
          <div className="info-image">
            <img src={locationImage} alt="Location" />
          </div>
        )}
        {activeSection === 'history' && (
          <div className="info-image">
            <img src={historyImage} alt="History" />
          </div>
        )}
        {activeSection === 'pastYears' && (
          <div className="info-image">
            <img src={pastYearsImage} alt="Past Years" />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
