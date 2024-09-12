// App.js
import React from 'react';
import Header from '/Header'; 
import Footer from '/Footer'; 
import Section from '/Section'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section 
          id="home" 
          title="Inicio" 
          content="Contenido de la sección de inicio." 
        />
        <Section 
          id="about" 
          title="Acerca de" 
          content="Contenido de la sección acerca de." 
        />
        <Section 
          id="contact" 
          title="Contacto" 
          content="Contenido de la sección contacto." 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
