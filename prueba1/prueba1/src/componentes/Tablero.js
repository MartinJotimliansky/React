import React, { useState, useEffect } from 'react';

const Tablero = ({ campeon1, campeon2, Vida1, Vida2 }) => {
  const CampSkills1 = campeon1.stats.Habilidades;
  const CampSkills2 = campeon2.stats.Habilidades;
  const [Turno, setTurno] = useState(1);
  const [Vida11, setVidaActual1] = useState(Vida1);
  const [Vida22, setVidaActual2] = useState(Vida2);

  useEffect(() => {
    // Actualizar la vida actual del campeón 1 en CampeonDetails cuando Vida11 cambie
    setVidaActual1(Vida1);
  }, [Vida1]);

  useEffect(() => {
    // Actualizar la vida actual del campeón 2 en CampeonDetails cuando Vida22 cambie
    setVidaActual2(Vida2);
  }, [Vida2]);

    const Camp1Hab1 = () => {
      setTurno(2);
      setVidaActual2(Vida22-CampSkills1.skill1.dmg)
      console.log("La vida de "+campeon2.name +" es: "+ (Vida22-CampSkills1.skill1.dmg))
    };
    const Camp1Hab2 = () => {
      setTurno(2);
      
    };
    const Camp1Hab3 = () => {
      setTurno(2);
      
    };
    const Camp2Hab1 = () => {
      setTurno(1);
      setVidaActual1(Vida11-CampSkills2.skill1.dmg)
      console.log("La vida de "+campeon1.name +" es: "+(Vida11-CampSkills2.skill1.dmg))
      
    };
    const Camp2Hab2 = () => {
      setTurno(1);
      
    };
    const Camp2Hab3 = () => {
      setTurno(1);
      
    };

    return (
      <div className='tablero'>
        <div className='dialogo'>
          <div>{campeon1.name}</div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div>{campeon2.name}</div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          <div></div> 
          {Turno ==1 && (
              <>
              <div><button className='habilidad' onClick={Camp1Hab1}> {CampSkills1.skill1.nombre}</button></div> 
              <div><button className='habilidad' onClick={Camp1Hab2}>{CampSkills1.skill2.nombre}</button></div>  
              <div><button className='habilidad' onClick={Camp1Hab3}>{CampSkills1.skill3.nombre}</button></div> 
              </> 
          )}

          {Turno ==2 && (
              <>
              <div><button className='habilidad' onClick={Camp2Hab1}>{CampSkills2.skill1.nombre}</button></div> 
              <div><button className='habilidad' onClick={Camp2Hab2}>{CampSkills2.skill2.nombre}</button></div>  
              <div><button className='habilidad' onClick={Camp2Hab3}>{CampSkills2.skill3.nombre}</button></div> 
              </> 
          )}

          <div>
          </div> 
        </div>
      </div>
    );
  };


export default Tablero;
