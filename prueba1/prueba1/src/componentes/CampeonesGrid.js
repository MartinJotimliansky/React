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
    <div className='grid'>
      
        <div className="grid-container">
          {filteredCampeones.map((campeon) => (
            <div className='item'
              key={campeon.id}
              onClick={() => handleCampeonClick(campeon)}
            >
              <img src={campeon.imagen} alt={campeon.name} />
            </div>
          ))}
        </div>
      

      <div className="search-container">
        <input className="search"
          type="text"
          placeholder="Buscar campeón"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default CampeonesGrid;
