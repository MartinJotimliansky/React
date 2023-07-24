import React, { useState, useEffect } from 'react';

const Tablero = ({
  campeon1,
  campeon2,
  Vida1,
  Vida2,
  setVidaActual1,
  setVidaActual2,
  ManaActual1,
  ManaActual2,
  setManaActual1,
  setManaActual2,
  h1,h2,h3
}) => {
  const CampSkills1 = campeon1.stats.Habilidades;
  const CampSkills2 = campeon2.stats.Habilidades;
  const [Turno, setTurno] = useState(1);

  useEffect(() => {
    setVidaActual1(Vida1);
  }, [Vida1]);

  useEffect(() => {
    setVidaActual2(Vida2);
  }, [Vida2]);

  useEffect(() => {
    setManaActual1(ManaActual1);
  }, [ManaActual1]);

  useEffect(() => {
    setManaActual2(ManaActual2);
  }, [ManaActual2]);

  const CooldownsChamp = () => {
    if (Turno==1){
      switch (true) {
        case h1:
          CampSkills1.skill1.cooldown_actual -= CampSkills1.skill1.cooldown;
          console.log("el cd de la hab 1 de" + campeon1.name + "es: "+ CampSkills1.skill1.cooldown_actual)
      
          break;
        case h2:
          CampSkills1.skill1.cooldown_actual -= CampSkills1.skill2.cooldown;
          break;
        case h3:
          CampSkills1.skill1.cooldown_actual -= CampSkills1.skill3.cooldown;
          break;
      }
    }
    else{
      switch (true) {
        case h1:
          CampSkills2.skill1.cooldown_actual -= CampSkills2.skill1.cooldown;
          console.log("el cd de la hab 1 de" + campeon2.name + "es: "+ CampSkills2.skill1.cooldown_actual)
          break;
        case h2:
          CampSkills2.skill2.cooldown_actual -= CampSkills2.skill2.cooldown;
          break;
        case h3:
          CampSkills2.skill3.cooldown_actual -= CampSkills2.skill3.cooldown;
          break;
      }
    }
  }

  const Camp1Hab1 = () => {
    if (CampSkills1.skill1.cooldown_actual >= CampSkills1.skill1.cooldown) {
      CooldownsChamp(h1=true, h2=false, h3=false)
      setTurno(2);
      setVidaActual2(Vida2 - CampSkills1.skill1.dmg)
      setManaActual1(ManaActual1 - CampSkills1.skill1.mana)
    }
  };
  const Camp1Hab2 = () => {
    setTurno(2);

  };
  const Camp1Hab3 = () => {
    setTurno(2);

  };
  const Camp2Hab1 = () => {

    if (CampSkills2.skill1.cooldown > 0) {
      setTurno(1);
      setVidaActual1(Vida1 - CampSkills2.skill1.dmg)
      setManaActual1(ManaActual1 - CampSkills1.skill1.mana)
      CooldownsChamp(h1=true, h2=false, h3=false)
    }

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
        {Turno == 1 && (
          <>
            <div>
              <button className={CampSkills1.skill1.cooldown_actual > 0 ? "habilidad_cooldown" : "habilidad"}
                onClick={Camp1Hab1}>
                Hab:{CampSkills1.skill1.nombre}
                Cd:{CampSkills1.skill1.cooldown_actual}
              </button>
            </div>
            <div>
              <button className={CampSkills1.skill2.cooldown_actual > 0 ? "habilidad_cooldown" : "habilidad"}
                onClick={Camp1Hab2}>
                Hab:{CampSkills1.skill2.nombre}
                Cd:{CampSkills1.skill2.cooldown_actual}
              </button>
            </div>
            <div>
              <button className={CampSkills1.skill3.cooldown_actual > 0 ? "habilidad_cooldown" : "habilidad"}
                onClick={Camp1Hab3}>
                Hab:{CampSkills1.skill3.nombre}
                Cd:{CampSkills1.skill3.cooldown_actual}
              </button>
            </div>
          </>
        )}

        {Turno == 2 && (
          <>
            <div>
              <button className={CampSkills2.skill1.cooldown_actual > 0 ? "habilidad_cooldown" : "habilidad"}
                onClick={Camp1Hab1}>
                Hab:{CampSkills2.skill1.nombre}
                Cd:{CampSkills2.skill1.cooldown_actual}
              </button>
            </div>
            <div>
              <button className={CampSkills2.skill2.cooldown_actual > 0 ? "habilidad_cooldown" : "habilidad"}
                onClick={Camp1Hab2}>
                Hab:{CampSkills2.skill2.nombre}
                Cd:{CampSkills2.skill2.cooldown_actual}
              </button>
            </div>
            <div>
              <button className={CampSkills2.skill3.cooldown_actual > 0 ? "habilidad_cooldown" : "habilidad"}
                onClick={Camp1Hab3}>
                Hab:{CampSkills2.skill3.nombre}
                Cd:{CampSkills2.skill3.cooldown_actual}
              </button>
            </div>
          </>
        )}

        <div>
        </div>
      </div>
    </div>
  );
};


export default Tablero;
