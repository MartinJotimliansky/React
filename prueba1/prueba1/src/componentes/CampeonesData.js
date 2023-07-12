import akaliImage from '../img/akali.jpg';
import blitzcrankImage from '../img/blitzcrank.jpg';
import braumImage from '../img/braum.jpg';
import caitlynImage from '../img/caitlyn.jpg';
import chogatImage from '../img/chogat.jpg';
import ekkoImage from '../img/ekko.jpg';
import ezrealImage from '../img/ezreal.jpg';
import fizzImage from '../img/fizz.jpg';
import garenImage from '../img/garen.jpg';
import gragasImage from '../img/gragas.jpg';
import jannaImage from '../img/janna.jpg';
import jhinImage from '../img/jhin.jpg';
import kassadinImage from '../img/kassadin.jpg';
import kindredImage from '../img/kindred.jpg';
import leeSinImage from '../img/lee sin.jpg';
import lilliaImage from '../img/lillia.jpg';
import akaliSplash from '../img/akaliSplash.jpg';
import blitzcrankSplash from '../img/blitzcrankSplash.jpg';
import braumSplash from '../img/braumSplash.jpg';
import caitlynSplash from '../img/caitlynSplash.jpg';
import chogatSplash from '../img/chogatSplash.jpg';
import ekkoSplash from '../img/ekkoSplash.jpg';
import ezrealSplash from '../img/ezrealSplash.jpg';
import fizzSplash from '../img/fizzSplash.jpg';
import garenSplash from '../img/garenSplash.jpg';
import gragasSplash from '../img/gragasSplash.jpg';
import jannaSplash from '../img/jannaSplash.jpg';
import jhinSplash from '../img/jhinSplash.jpg';
import kassadinSplash from '../img/kassadinSplash.jpg';
import kindredSplash from '../img/kindredSplash.jpg';
import leeSinSplash from '../img/leesinSplash.jpg';
import lilliaSplash from '../img/lilliaSplash.jpg';
import aatroxImage from '../img/aatrox.jpg';
import akshanImage from '../img/akshan.jpg';
import corkiImage from '../img/corki.jpg';
import evelynnImage from '../img/evelynn.jpg';
import gnarImage from '../img/gnar.jpg';
import karthusImage from '../img/karthus.jpg';
import nasusImage from '../img/nasus.jpg';
import gravesImage from '../img/graves.jpg';
import aatroxSplash from '../img/aatroxSplash.jpg';
import akshanSplash from '../img/akshanSplash.jpg';
import corkiSplash from '../img/corkiSplash.jpg';
import evelynnSplash from '../img/evelynnSplash.jpg';
import gnarSplash from '../img/gnarSplash.jpg';
import gravesSplash from '../img/gravesSplash.jpg';
import karthusSplash from '../img/karthusSplash.jpg';
import nasusSplash from '../img/nasusSplash.jpg';
import HabilidadesData from './HabilidadesData';

const CampeonesData = [
    {
      id: 1,
      imagen: akaliImage,
      splash: akaliSplash,
      titulo: "La asesina furtiva",
      name: 'Akali',
      lineaPrincipal: 'Central',
      stats: {
        
        HP:100,
        HPACTUAL:80,
        Mana:80,
        ManaActual:60,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 2,
      imagen: blitzcrankImage,
      splash: blitzcrankSplash,
      titulo: "El gran gólem de vapor",
      name: 'Blitzcrank',
      lineaPrincipal: 'Soporte',
      stats: {
        HP:200,
        HPACTUAL:80,
        Mana:80,
        ManaActual:60,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad3,
          skill2:HabilidadesData[0].habilidad4,
          skill3:HabilidadesData[0].habilidad5,
        }
      },
    },
    {
      id: 3,
      imagen: braumImage,
      splash: braumSplash,
      titulo: "El corazón de Fréljord",
      name: 'Braum',
      lineaPrincipal: 'Soporte',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 4,
      imagen: caitlynImage,
      splash: caitlynSplash,
      titulo: "La sheriff de Piltóver",
      name: 'Caitlyn',
      lineaPrincipal: 'Tirador',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 5,
      imagen: chogatImage,
      splash: chogatSplash,
      titulo: "El terror del vacío",
      name: 'Chogat',
      lineaPrincipal: 'Superior',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 6,
      imagen: ekkoImage,
      splash: ekkoSplash,
      titulo: "El jóven que fragmentó el tiempo",
      name: 'Ekko',
      lineaPrincipal: 'Central',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 7,
      imagen: ezrealImage,
      splash: ezrealSplash,
      titulo: "El explorador pródigo",
      name: 'Ezreal',
      lineaPrincipal: 'Tirador',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 8,
      imagen: fizzImage,
      splash: fizzSplash,
      titulo: "El bromista de las mareas",
      name: 'Fizz',
      lineaPrincipal: 'Central',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 9,
      imagen: garenImage,
      splash: garenSplash,
      titulo: "El poder de demacia",
      name: 'Garen',
      lineaPrincipal: 'Superior',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 10,
      imagen: gragasImage,
      splash: gragasSplash,
      titulo: "El revoltoso",
      name: 'Gragas',
      lineaPrincipal: 'Central',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 11,
      imagen: jannaImage,
      splash: jannaSplash,
      titulo: "La furia de la tormenta",
      name: 'Janna',
      lineaPrincipal: 'Soporte',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 12,
      imagen: jhinImage,
      splash: jhinSplash,
      titulo: "El virtuoso",
      name: 'Jhin',
      lineaPrincipal: 'Tirador',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 13,
      imagen: kassadinImage,
      splash: kassadinSplash,
      titulo: "El caminante del vacío",
      name: 'Kassadin',
      lineaPrincipal: 'Central',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 14,
      imagen: kindredImage,
      splash: kindredSplash,
      titulo: "Los cazadores eternos",
      name: 'Kindred',
      lineaPrincipal: 'Jungla',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 15,
      imagen: leeSinImage,
      splash: leeSinSplash,
      titulo: "El monje ciego",
      name: 'Lee Sin',
      lineaPrincipal: 'Jungla',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    
    {
      id: 17,
      imagen: aatroxImage,
      splash: aatroxSplash,
      titulo: "La espada Darkin",
      name: 'Aatrox',
      lineaPrincipal: 'Superior',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 18,
      imagen: akshanImage,
      splash: akshanSplash,
      titulo: "El centinela rebelde",
      name: 'Akshan',
      lineaPrincipal: 'Tirador',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 19,
      imagen: corkiImage,
      splash: corkiSplash,
      titulo: "El bombardero osado",
      name: 'Corki',
      lineaPrincipal: 'Tirador',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 20,
      imagen: evelynnImage,
      splash: evelynnSplash,
      titulo: "El abrazo de la agonía",
      name: 'Evelynn',
      lineaPrincipal: 'Jungla',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 21,
      imagen: gnarImage,
      splash: gnarSplash,
      titulo: "El eslabón perdido",
      name: 'gnar',
      lineaPrincipal: 'Superior',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 22,
      imagen: gravesImage,
      splash: gravesSplash,
      titulo: "El forajido",
      name: 'Graves',
      lineaPrincipal: 'Jungla',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 23,
      imagen: karthusImage,
      splash: karthusSplash,
      titulo: "El canto de la muerte",
      name: 'Karthus',
      lineaPrincipal: 'Central',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 24,
      imagen: nasusImage,
      splash: nasusSplash,
      titulo: "El curador de las arenas",
      name: 'Nasus',
      lineaPrincipal: 'Superior',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3,
        }
      },
    },
    {
      id: 16,
      imagen: lilliaImage,
      splash: lilliaSplash,
      titulo: "La flor tímida",
      name: 'Lillia',
      lineaPrincipal: 'Jungla',
      stats: {
        
        HP:100,
        HPACTUAL:100,
        Mana:80,
        ManaActual:80,
        AD: 80,
        AP: 0,
        Armadura: 20,
        ResistenciaMágica: 10,
        Habilidades:{
          skill1:HabilidadesData[0].habilidad1,
          skill2:HabilidadesData[0].habilidad2,
          skill3:HabilidadesData[0].habilidad3, 
        }
      },
    },
  ];
  
  export default CampeonesData;

  