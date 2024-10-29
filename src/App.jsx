import { useState, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Players from './components/Players';
import Trophies from './components/Trophies';
import Stadium from './components/Stadium';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  let scrollTimeout = null;

  const scrollToSection = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      const sections = ["home", "about", "players", "trophies", "stadium"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 100); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar sticky="top" activeSection={activeSection} scrollToSection={scrollToSection} />

      <div className="content">

        <section id="home"><Home /></section>

        <section id="about"><About /></section>

        <section id="players"><Players /></section>

        <section id="trophies"><Trophies /></section>

        <section id="stadium"><Stadium /></section>

      </div>
    </div>
  );
};

export default App;
