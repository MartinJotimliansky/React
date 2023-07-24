import React, { useState } from 'react';


const CampeonesGrid = ({ campeones, handleCampeonClick,campeon,campeon1,selectedCampeon }) => {
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
            selectedCampeon && selectedCampeon.id == campeon.id && !campeon1?
            <div className='itemSelec' key={campeon.id}>
              <img src={campeon.imagen} alt={campeon.name} />
            </div>
            :
            
            campeon1 && campeon.id == campeon1.id? 
              <div className='itemPickeado' key={campeon.id}>
                <img src={campeon.imagen} alt={campeon.name} />
              </div>
            :
            <div className='item' key={campeon.id} onClick={() => handleCampeonClick(campeon)}>
              <img  src={campeon.imagen} alt={campeon.name} />
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
