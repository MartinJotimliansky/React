import React, { useState } from 'react';
import './App.css';
import CampeonesGrid from './componentes/CampeonesGrid';
import CampeonDetails from './componentes/CampeonDetails ';
import CampeonesData from './componentes/CampeonesData';


import mapa from './img/mapa.jpg';




const App = () => {
  
  const [selectedCampeon, setSelectedCampeon] = useState(null);

  const handleCampeonClick = (campeon) => {
    setSelectedCampeon(campeon);
  };

  return (
    <body>
      <div class="container">
        <div class="campeon-details">
          <CampeonDetails selectedCampeon={selectedCampeon} />  
        </div>
      
        <div class="campeones-grid">
          <CampeonesGrid campeones={CampeonesData} handleCampeonClick={handleCampeonClick} />
        </div>
      
        <div class="campeon-details">
          <CampeonDetails selectedCampeon={selectedCampeon} />
        </div>
      </div>
    </body>
  );
};

export default App;
