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
  
  const handleCampeonClick = (campeon) => {
    setSelectedCampeon(campeon);
  };

  const handleFijarSeleccion = (player) => {
    if (player === '1') {
      setCampeon1(selectedCampeon);
      console.log("dd"+(selectedCampeon.stats.HPACTUAL))
      setVidaActual1(selectedCampeon.stats.HPACTUAL)
      console.log("ff"+(VidaActual1))
      setFijarCampeon1(true);
    } else if (player === '2') {
      setCampeon2(selectedCampeon);
      setFijarCampeon2(true);
      setVidaActual2(selectedCampeon.stats.HPACTUAL)
    }
  };

  useEffect(() => {
    console.log("Nuevo valor de VidaActual1:", VidaActual1);
  }, [VidaActual1]);


  return (
    <div className="container">
      <div className="campeon-details">
        {!fijarCampeon1 ? (
          <>
            <CampeonDetails
              player="1"
              VidaActual1={VidaActual1 !== 0 && VidaActual1 !== undefined ? VidaActual1 : null}
              campeon={selectedCampeon}
              handleFijarSeleccion={handleFijarSeleccion}
            />
            {selectedCampeon && (
              <button onClick={() => handleFijarSeleccion('1')}>Fijar Selección</button>
            )}
          </>
        ) : (
          <CampeonDetails player="1" campeon1={campeon1} fijado1={fijarCampeon1} fijado2={fijarCampeon2} VidaActual1={VidaActual1 !== 0 && VidaActual1 !== undefined ? VidaActual1 : null}/>
        )}
      </div>

      <div className="campeones-grid">
        {!fijarCampeon1 || !fijarCampeon2 ? (
          <CampeonesGrid
            campeones={CampeonesData}
            handleCampeonClick={handleCampeonClick}
          />
        ) : (
          <Tablero habilidades={HabilidadesData} campeon1={campeon1} campeon2={campeon2} Vida1={VidaActual1} Vida2={VidaActual2}/>
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
                  VidaActual2={VidaActual2 !== 0 && VidaActual2 !== undefined ? VidaActual1 : null}
                />
                {selectedCampeon && (
                  <button onClick={() => handleFijarSeleccion('2')}>Fijar Selección</button>
                )}
              </>
            ) : (
              <CampeonDetails player="2" campeon={campeon2} fijado1={fijarCampeon1} fijado2={fijarCampeon2} VidaActual2={VidaActual2 !== 0 && VidaActual2 !== undefined ? VidaActual2 : null}/>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
