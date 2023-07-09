import React, { useState } from 'react';


const CampeonesGrid = ({ campeones, handleCampeonClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar los campeones por nombre utilizando el término de búsqueda
  const filteredCampeones = campeones.filter((campeon) => {
    return campeon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar campeón"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="grid-container">
        {filteredCampeones.map((campeon) => (
          <div
            key={campeon.id}
            className="campeon-card"
            onClick={() => handleCampeonClick(campeon)}
          >
            <img src={campeon.imagen} alt={campeon.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampeonesGrid;
