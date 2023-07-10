import React, { useState } from 'react';
import './App.css';
import CampeonesGrid from './componentes/CampeonesGrid';
import CampeonDetails from './componentes/CampeonDetails';
import CampeonesData from './componentes/CampeonesData';
import Tablero from './componentes/Tablero';

const App = () => {
  const [selectedCampeon, setSelectedCampeon] = useState(null);
  const [campeon1, setCampeon1] = useState(null);
  const [campeon2, setCampeon2] = useState(null);
  const [fijarCampeon1, setFijarCampeon1] = useState(false);
  const [fijarCampeon2, setFijarCampeon2] = useState(false);

  const handleCampeonClick = (campeon) => {
    setSelectedCampeon(campeon);
  };

  const handleFijarSeleccion = (player) => {
    if (player === '1') {
      setCampeon1(selectedCampeon);
      setFijarCampeon1(true);
    } else if (player === '2') {
      setCampeon2(selectedCampeon);
      setFijarCampeon2(true);
    }
  };

  return (
    <div className="container">
      <div className="campeon-details">
        {!fijarCampeon1 ? (
          <>
            <CampeonDetails
              player="1"
              campeon={selectedCampeon}
              handleFijarSeleccion={handleFijarSeleccion}
            />
            {selectedCampeon && (
              <button onClick={() => handleFijarSeleccion('1')}>Fijar Selección</button>
            )}
          </>
        ) : (
          <CampeonDetails player="1" campeon={campeon1} fijado1={fijarCampeon1} fijado2={fijarCampeon2}/>
        )}
      </div>

      <div className="campeones-grid">
        {!fijarCampeon1 || !fijarCampeon2 ? (
          <CampeonesGrid
            campeones={CampeonesData}
            handleCampeonClick={handleCampeonClick}
          />
        ) : (
          <Tablero />
        )}
      </div>


      <div className="campeon-details">
        {fijarCampeon1 && (
          <>
            {!fijarCampeon2 ? (
              <>
                <CampeonDetails
                  player="2"
                  campeon={selectedCampeon}
                  handleFijarSeleccion={handleFijarSeleccion}
                />
                {selectedCampeon && (
                  <button onClick={() => handleFijarSeleccion('2')}>Fijar Selección</button>
                )}
              </>
            ) : (
              <CampeonDetails player="2" campeon={campeon2} fijado1={fijarCampeon1} fijado2={fijarCampeon2} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
