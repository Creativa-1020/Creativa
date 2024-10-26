// src/App.js
import React, {useState, useEffect} from 'react';
import './App.css'
import './animations.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contacto from './components/contact';


function App() {

  const contacts = [
    {
      text: "Jr. Alipio Ponce con Calle Comandante Juan Benites y Jr, Mariano de los Santos Urb, Carabayllo",
      icon: <i class="fa-solid fa-location-dot"></i>
    },
    {
      text: "958040785",
      icon: <i class="fa-solid fa-phone"></i>
    },
    {
      text: "creativa1020@gmail.com",
      icon: <i class="fa-solid fa-envelope"></i>
    }
  ]

  return (
    <div className='container'>
      <Router>
        <header>
            <nav>
              <div className='logo-section'>
                <div className='logo'></div>
              </div>
              <ul>
                <li style={{animationDelay: "1s"}}>
                  <Link to="/">Inicio</Link>
                </li>
                <li style={{animationDelay: "1.3s"}}>
                  <Link to="/about">Sobre Nosotros</Link>
                </li>
                <li style={{animationDelay: "1.5s"}}>
                  <Link to="/contact">Contactos</Link>
                </li>
              </ul>
            </nav>
        </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacto />} />
          </Routes>

          <footer>
            <section>
              <h3>CREATIVA</h3>
              <ul>
                <li></li>
              </ul>
            </section>
            <section>
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/about">Sobre Nosotros</Link>
                </li>
                <li>
                  <Link to="/contact">Contactos</Link>
                </li>
              </ul>
            </section>
            <section>
            <h3>Contactanos</h3>
              <ul>
                {contacts.map((element) => (
                  <li>{element.icon} {element.text}</li>
                ))}
              </ul>
            </section>
            <section>
            <h3>Unete Ahora</h3>
              <ul>
                <li>Tu voz, tu arte, tu escuela: Vota CREATIVA</li>
              </ul>
            </section>
          </footer>
      </Router>
    </div>
  );
}

export default App;
