import React, { useState, useEffect } from 'react';

const CampeonDetails = ({ player, campeon, fijado1, fijado2, VidaActual1, VidaActual2 }) => {
  
  const [vidaActual, setVidaActual] = useState(0);
  const manaActual = campeon ? (campeon.stats.ManaActual / campeon.stats.Mana) * 100 : 0;
  
  useEffect(() => {
    setVidaActual(player === '1' ? VidaActual1 : VidaActual2);
    console.log('Vida actual actualizada:', VidaActual1);
  }, [player, VidaActual1, VidaActual2]);
  
  
  return (
    <div>
      {campeon && (
        <div>
          <h2 style={{ color: 'white' }}>Jugador {player}</h2>
          <div
            style={{
              backgroundImage: `url(${campeon.splash})`,
              backgroundSize: 'cover',
              transition: 'background-image 0.3s ease-in-out',
            }}
          >
            <div className="card">
              {((!fijado1 && !fijado2) || (fijado1 && !fijado2)) && campeon && (
                <div style={{ marginTop: '20px' }}>
                  <h3>{campeon.name}</h3>
                  <p style={{ marginBottom: 0 }}>{campeon.titulo}</p>
                </div>
              )} 
              {((!fijado1 && !fijado2) || (fijado1 && !fijado2)) && campeon && (
                <div className="stats">
                  <p>HP: {campeon.stats.HP}</p>
                  <p>Mana: {campeon.stats.Mana}</p>
                  <p>AD: {campeon.stats.AD}</p>
                  <p>AP: {campeon.stats.AP}</p>
                  <p>Armor: {campeon.stats.Armadura}</p>
                  <p>MR: {campeon.stats.ResistenciaMágica}</p>
                </div>
              )} 
              
              {fijado1 && fijado2 && campeon && (
                <div style={{ transition: 'background-image 0.3s ease-in-out' , marginTop:'50px'}}>
                <div className="cardBarras">
                  <h3 className='HP'>Vida: </h3>
                  <div className="barraHP">
                  <div style={{ width: `${vidaActual}%`, backgroundColor: 'green', color: 'white' }}>
                    {vidaActual}
                  </div>
                  </div>
                  <h3 className='MANA'>Mana:</h3>
                  <div className="barraMANA">
                    <div style={{ width: `${manaActual}%`, backgroundColor: 'blue' , color:'white'}}>
                        {campeon.stats.ManaActual}
                    </div>
                  </div>
                </div>
                
              </div>
            
              )} 


            </div>
          </div>
        </div>
      )}
      {fijado1 && fijado2 && campeon && (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default CampeonDetails;
