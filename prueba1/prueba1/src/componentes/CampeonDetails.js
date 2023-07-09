import React from 'react';


const CampeonDetails = ({ selectedCampeon }) => {
  return (
    <div>
      {selectedCampeon && (
        <div style={{backgroundImage: `url(${selectedCampeon.splash})`,backgroundSize: 'cover' , transition: 'background-image 0.3s ease-in-out'}}>
          <div className="card">
            <div style={{marginTop:0}}><h3>{selectedCampeon.name}</h3></div>
            <p style={{marginBottom:0}}>{selectedCampeon.titulo}</p>
            
            <div className="stats">
              <p>HP: {selectedCampeon.stats.HP}</p>
              <p>Mana: {selectedCampeon.stats.Mana}</p>
              <p>AD: {selectedCampeon.stats.AD}</p>
              <p>AP: {selectedCampeon.stats.AP}</p>
              <p>Armor: {selectedCampeon.stats.Armadura}</p>
              <p>MR: {selectedCampeon.stats.ResistenciaMágica}</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CampeonDetails;
