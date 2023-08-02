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
  h1, h2, h3
}) => {
  const initialCampSkills1 = JSON.parse(JSON.stringify(campeon1.stats.Habilidades));
  const initialCampSkills2 = JSON.parse(JSON.stringify(campeon2.stats.Habilidades));
  const [CampSkills1, setCampSkills1] = useState(initialCampSkills1);
  const [CampSkills2, setCampSkills2] = useState(initialCampSkills2);
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

  useEffect(() => {
    if (Turno === 1) {
      const updatedSkills1 = {
        ...CampSkills1,
        skill1: { ...CampSkills1.skill1, cooldown_actual: Math.max(0, CampSkills1.skill1.cooldown_actual - 1) },
        skill2: { ...CampSkills1.skill2, cooldown_actual: Math.max(0, CampSkills1.skill2.cooldown_actual - 1) },
        skill3: { ...CampSkills1.skill3, cooldown_actual: Math.max(0, CampSkills1.skill3.cooldown_actual - 1) },
      };
      setCampSkills1(updatedSkills1);
    } else if (Turno === 2) {
      const updatedSkills2 = {
        ...CampSkills2,
        skill1: { ...CampSkills2.skill1, cooldown_actual: Math.max(0, CampSkills2.skill1.cooldown_actual - 1) },
        skill2: { ...CampSkills2.skill2, cooldown_actual: Math.max(0, CampSkills2.skill2.cooldown_actual - 1) },
        skill3: { ...CampSkills2.skill3, cooldown_actual: Math.max(0, CampSkills2.skill3.cooldown_actual - 1) },
      };
      setCampSkills2(updatedSkills2);
    }
  }, [Turno]);
  

  const Camp1Hab1 = () => {
    console.log("mana 1" + ManaActual1);
    if (CampSkills1.skill1.cooldown_actual === 0) {
      setTurno(2);
      setVidaActual2(Vida2 - CampSkills1.skill1.dmg);
      setManaActual1(ManaActual1 - CampSkills1.skill1.mana);
      const updatedSkills1 = { ...CampSkills1, skill1: { ...CampSkills1.skill1, cooldown_actual: CampSkills1.skill1.cooldown } };
      setCampSkills1(updatedSkills1);
    }
  };

  const Camp1Hab2 = () => {
    if (CampSkills1.skill2.cooldown_actual === 0) {
      setTurno(2);
      setVidaActual2(Vida2 - CampSkills1.skill2.dmg);
      setManaActual1(ManaActual1 - CampSkills1.skill2.mana);
      const updatedSkills1 = { ...CampSkills1, skill2: { ...CampSkills1.skill2, cooldown_actual: CampSkills1.skill2.cooldown } };
      setCampSkills1(updatedSkills1);
    }
  };

  const Camp1Hab3 = () => {
    if (CampSkills1.skill3.cooldown_actual === 0) {
      setTurno(2);
      setVidaActual2(Vida2 - CampSkills1.skill3.dmg);
      setManaActual1(ManaActual1 - CampSkills1.skill3.mana);
      const updatedSkills1 = { ...CampSkills1, skill3: { ...CampSkills1.skill3, cooldown_actual: CampSkills1.skill3.cooldown } };
      setCampSkills1(updatedSkills1);
    }
  };

  const Camp2Hab1 = () => {
    if (CampSkills2.skill1.cooldown_actual === 0) {
      setTurno(1);
      setVidaActual1(Vida1 - CampSkills2.skill1.dmg);
      setManaActual2(ManaActual2 - CampSkills2.skill1.mana);
      const updatedSkills2 = { ...CampSkills2, skill1: { ...CampSkills2.skill1, cooldown_actual: CampSkills2.skill1.cooldown } };
      setCampSkills2(updatedSkills2);
    }
  };

  const Camp2Hab2 = () => {
    if (CampSkills2.skill2.cooldown_actual === 0) {
      setTurno(1);
      setVidaActual1(Vida1 - CampSkills2.skill2.dmg);
      setManaActual2(ManaActual2 - CampSkills2.skill2.mana);
      const updatedSkills2 = { ...CampSkills2, skill2: { ...CampSkills2.skill2, cooldown_actual: CampSkills2.skill2.cooldown } };
      setCampSkills2(updatedSkills2);
    }
  };

  const Camp2Hab3 = () => {
    if (CampSkills2.skill3.cooldown_actual === 0) {
      setTurno(1);
      setVidaActual1(Vida1 - CampSkills2.skill3.dmg);
      setManaActual2(ManaActual2 - CampSkills2.skill3.mana);
      const updatedSkills2 = { ...CampSkills2, skill3: { ...CampSkills2.skill3, cooldown_actual: CampSkills2.skill3.cooldown } };
      setCampSkills2(updatedSkills2);
    }
  };
  
  return (
    <div className='tablero'>
      <div className='dialogo'>
        <div>{campeon1.name}</div>
        <div></div>
        <div></div>
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {Turno === 1 && (
            <div className="campeon-icon" style={{ backgroundImage: `url(${campeon1.imagen})` }}></div>
          )}
        </div>
        <div>
          <button className={`habilidad ${Turno !== 1 && "hidden"}`} onClick={Camp1Hab1}>
            {CampSkills1.skill1.cooldown_actual > 0 ? CampSkills1.skill1.cooldown_actual : CampSkills1.skill1.nombre}
          </button>
        </div>
        <div>
          <button className={`habilidad ${Turno !== 1 && "hidden"}`} onClick={Camp1Hab2}>
            {CampSkills1.skill2.cooldown_actual > 0 ? CampSkills1.skill2.cooldown_actual : CampSkills1.skill2.nombre}
          </button>
        </div>
        <div>
          <button className={`habilidad ${Turno !== 1 && "hidden"}`} onClick={Camp1Hab3}>
            {CampSkills1.skill3.cooldown_actual > 0 ? CampSkills1.skill3.cooldown_actual : CampSkills1.skill3.nombre}
          </button>
        </div>
        <div>
          <button className={`habilidad ${Turno !== 2 && "hidden"}`} onClick={Camp2Hab1}>
            {CampSkills2.skill1.cooldown_actual > 0 ? CampSkills2.skill1.cooldown_actual : CampSkills2.skill1.nombre}
          </button>
        </div>
        <div>
          <button className={`habilidad ${Turno !== 2 && "hidden"}`} onClick={Camp2Hab2}>
            {CampSkills2.skill2.cooldown_actual > 0 ? CampSkills2.skill2.cooldown_actual : CampSkills2.skill2.nombre}
          </button>
        </div>
        <div>
          <button className={`habilidad ${Turno !== 2 && "hidden"}`} onClick={Camp2Hab3}>
            {CampSkills2.skill3.cooldown_actual > 0 ? CampSkills2.skill3.cooldown_actual : CampSkills2.skill3.nombre}
          </button>
        </div>
        <div>
          {Turno === 2 && (
            <div className="campeon-icon" style={{ backgroundImage: `url(${campeon2.imagen})` }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tablero;
