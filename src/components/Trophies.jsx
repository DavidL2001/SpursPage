import React from "react"
import '../App.css'
import trophy1 from "../assets/trophy1.jpg"
import trophy2 from "../assets/trophy2.jpg"
import trophy3 from "../assets/trophy3.jpg"
import trophy4 from "../assets/trophy4.jpg"
import trophy5 from "../assets/trophy5.jpg"
import trophy6 from "../assets/trophy6.jpg"

const Trophies = () => {

  const trophy = [
    {name: "English division 1", image: trophy1, year: "1951, 1961", amount: "2 Time winners"},
    {name: "Fa Cup", image: trophy2, year: "1901, 1921, 1961, 1962, 1967, 1981, 1982, 1991", amount: "8 Time winners"},
    {name: "UEFA Cup", image: trophy3, year: "1972, 1984", amount: "2 Time winners"},
    {name: "League Cup", image: trophy4, year: "1971, 1973, 1999, 2008", amount: "4 Time winners"},
    {name: "Community Sheald", image: trophy5, year: "1921, 1951, 1961, 1962, 1967, 1981, 1991", amount: "7 Time winners"},
    {name: "Cup winners Cup", image: trophy6, year: "1963", amount: "1 Time winner"},
  ]


return (
    <section id="trophies" className="Trophies">
       <div className="trophy-list">
          <h2>Trophies</h2>
            <div className="scroll-container">
              {trophy.map((trophy, index) => (
                <div key={index} className="trophy-card">
                  <p className="trophy-name">{trophy.name}</p>
                    <img src={trophy.image} alt={trophy.name} className="trophy-image" />
                    <p className="trophy-year">{trophy.year}</p>
                    <p className="trophy-amount">{trophy.amount}</p>
                </div>
              ))}
            </div>
        </div>
    </section>
)
}

export default Trophies; 
