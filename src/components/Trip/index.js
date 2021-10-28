import React from 'react';

import photoCircuit from 'src/assets/images/circuit-plesse.jpg';
import map from 'src/assets/images/map.png';

import './style.scss';

const Trip = () => (
  <main className="trip">
    <h1 className="trip-title">Sortie circuit Solokart</h1>
    <div className="trip-container">
      <div className="trip-container-image">
        <img className="trip-image" src={photoCircuit} alt="Circuit" />
        <img className="trip-image" src={photoCircuit} alt="Circuit" />
        <img className="trip-image" src={photoCircuit} alt="Circuit" />
      </div>
      <section className="section-container">
        <div className="trip-container-summary">
          <div className="trip-summary">
            <h2 className="trip-summary-title">
              Le plus grand circuit d’Europe !
            </h2>
            <p className="trip-summary-description">
              Une 11ème sortie sur la plus grande piste d’Europe.
              Un circuit de 1350m, un deuxième de 800m.
              Matériel tout neuf pour les Juniors en 270cc !
              Et un héliport pour ceux qui préfèrent arriver en hélicoptère !
              Sensations et vitesse assurées.
            </p>
            <p className="trip-summary-adress">
              Adresse : Lieu-dit « La Piardière », 44630 Plessé
            </p>
            <br />
            <h3 className="trip-summary-formul">
              FORMULES COURSE SPRINT Adultes & Jeunes – 30min de roulage/pilote
            </h3>
            <p className="trip-formul-adult">
              <span className="trip-class-adult">ADULTES : à partir de 15 ans : Matériel 390cc 14cv </span>
              <br />
              Accueil & briefing
              <br />
              Essais libres 10 min
              <br />
              Essais 10 min
              <br />
              Finale 10 min
              <br />
              Remise de trophées
              <br />
              <span className="trip-tarif-adult"> Tarif membre : 55€  – Tarif extérieur : 65€ </span>
            </p>
            <p className="trip-formul-young">
              <span className="trip-class-young">JEUNES : à partir de 12 ans : Matériel 270cc 9cv </span>
              <br />
              Accueil & briefing
              <br />
              Essais libres 10 min
              <br />
              Essais chrono 10 min
              <br />
              Finale 10 min
              <br />
              Remise de trophées
              <br />
              <span className="trip-tarif-young">Tarif membre : 40€  – Tarif extérieur : 47€ </span>
            </p>
            <p className="trip-formul-junior">
              <span className="trip-class-junior">JUNIORS : de 7 à 10 ans :  Matériel 160cc 4,5cv </span>
              <br />
              Séances de location
              <br />
              10 min
              <br />
              Possibilité jusqu’à 3 sessions
              <br />
              <span className="trip-tarif-junior">Tarif négocié pour tous membres et extérieurs : 10€ </span>
            </p>
            <p className="trip-info">
              PREVOIR VOS MASQUES qui sont obligatoires dans le bâtiment
              et dans les casques de location ou une cagoule.
            </p>
          </div>
        </div>
        <div className="trip-map">
          <img className="trip-map-image" src={map} alt="Plan du circuit" />
        </div>
      </section>
    </div>
  </main>
);

export default Trip;
