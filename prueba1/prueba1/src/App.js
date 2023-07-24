import React, { useState, useEffect } from 'react';
import './App.css';
import CampeonesGrid from './componentes/CampeonesGrid';
import CampeonDetails from './componentes/CampeonDetails';
import CampeonesData from './componentes/CampeonesData';
import Tablero from './componentes/Tablero';
import HabilidadesData from './componentes/HabilidadesData';

const App = () => {
  const [selectedCampeon, setSelectedCampeon] = useState(null);
  const [campeon1, setCampeon1] = useState(null);
  const [campeon2, setCampeon2] = useState(null);
  const [fijarCampeon1, setFijarCampeon1] = useState(false);
  const [fijarCampeon2, setFijarCampeon2] = useState(false);
  const [VidaActual1, setVidaActual1] = useState(0)
  const [VidaActual2, setVidaActual2] = useState(0)
  const [ManaActual1, setManaActual1] = useState(0)
  const [ManaActual2, setManaActual2] = useState(0)


  const handleCampeonClick = (campeon) => {
    setSelectedCampeon(campeon);
  };

  const handleFijarSeleccion = (player) => {
    const isPlayerOne = player === '1';
    const isPlayerTwo = player === '2';
    if (isPlayerOne) {
      setCampeon1(selectedCampeon);
      setFijarCampeon1(isPlayerOne);
      setVidaActual1(selectedCampeon.stats.HPACTUAL)
      setManaActual1(selectedCampeon.stats.ManaActual)
    } else if (isPlayerTwo) {
      setCampeon2(selectedCampeon);
      setFijarCampeon2(isPlayerTwo);
      setVidaActual2(selectedCampeon.stats.HPACTUAL)
      setManaActual2(selectedCampeon.stats.ManaActual)
      console.log("2" + isPlayerTwo)
    }
  };

  return (
    <div className="container">
      <div className="campeon-details">
        {!fijarCampeon1 && (
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
        )} 
         {fijarCampeon1 &&(
          <CampeonDetails player="1" campeon1={campeon1}
           fijado1={fijarCampeon1} 
           ManaActual1={ManaActual1 !== 0 && ManaActual1 !== undefined ? ManaActual1 : null} 
           VidaActual1={VidaActual1 !== 0 && VidaActual1 !== undefined ? VidaActual1 : null} />
           
        )}
      </div>

      <div className="campeones-grid">
        {!fijarCampeon1 || !fijarCampeon2 ? (
          <CampeonesGrid
            campeon1={campeon1 !== 0 && campeon1 !== undefined ? campeon1 : null}
            // campeon1_id={campeon.id}
            campeones={CampeonesData}
            selectedCampeon={selectedCampeon || null}
            handleCampeonClick={handleCampeonClick}
          />
        ) : (
          <Tablero
            habilidades={HabilidadesData}
            campeon1={campeon1}
            campeon2={campeon2}
            Vida1={VidaActual1}
            Vida2={VidaActual2}
            setVidaActual1={setVidaActual1}
            setVidaActual2={setVidaActual2}
            ManaActual1={ManaActual1}
            ManaActual2={ManaActual1}
            setManaActual1={setManaActual1}
            setManaActual2={setManaActual2}
            

          />
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
              <CampeonDetails 
              player="2" campeon={campeon2} 
              fijado1={fijarCampeon1} fijado2={fijarCampeon2} 
              VidaActual2={VidaActual2 !== 0 && VidaActual2 !== undefined ? VidaActual2 : null} 
              ManaActual2={ManaActual2 !== 0 && ManaActual2 !== undefined ? ManaActual2 : null} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
