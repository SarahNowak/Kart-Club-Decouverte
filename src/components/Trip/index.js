import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';
import Map from 'src/components/Map';

const Trip = ({ trip }) => (
  <main className="trip">
    <button className="trip-button" type="button">
      <Link to="/les-sorties" className="cardTripLink">
        ↩
        Retour aux sorties
      </Link>
    </button>
    <h1 className="trip-title">{trip.circuit}</h1>
    <div className="trip-container">
      <div className="trip-container-image">
        {trip.photosTrip.map((info) => (
          <img key={info} className="trip-image" src={`/images/${info}`} alt="Circuit" />
        ))}
      </div>
      <section className="section-container">
        <div className="trip-container-summary">
          <div className="trip-summary">
            <h2 className="trip-summary-title">
              {trip.title}
            </h2>
            <div className="trip-summary-description">
              {trip.description.map((info) => (
                <ul key={info}>
                  <li>{info} </li>
                </ul>
              ))}
            </div>
            <p className="trip-summary-adress">
              {trip.adress}
            </p>
            <p className="trip-summary-date">
              {trip.date}
            </p>
            <br />
            <h3 className="trip-summary-formul">
              FORMULES Adultes & Jeunes – 30min de roulage/pilote
            </h3>
            <div className="trip-formul-adult">
              <span className="trip-class-adult">ADULTES : à partir de {trip.classAdult} ans : Matériel {trip.materialAdult}</span>
              {trip.sessionAdult.map((info) => (
                <ul key={info}>
                  <li>{info}</li>
                </ul>
              ))}
              <span className="trip-tarif-adult"> Tarif membre : {trip.tarifAdultMember}€  – Tarif extérieur : {trip.tarifAdultExt}€ – Plein tarif : {trip.tarifAdult}€ </span>
            </div>
            { trip.classYoung !== ''
              ? (
                <div className="trip-formul-young">
                  <span className="trip-class-young">JEUNES : à partir de {trip.classYoung} ans : Matériel {trip.materialYoung} </span>
                  {trip.sessionYoung.map((info) => (
                    <ul key={info}>
                      <li>{info}</li>
                    </ul>
                  ))}
                  <span className="trip-tarif-young">Tarif membre : {trip.tarifYoungMember}€  – Tarif extérieur : {trip.tarifYoungExt}€ – Plein tarif : {trip.tarifYoung}€</span>
                </div>
              )
              : ''}
            { trip.classMinJunior !== ''
              ? (
                <div className="trip-formul-junior">
                  <span className="trip-class-junior">JUNIORS : de {trip.classMinJunior} à {trip.classMaxJunior} ans :  Matériel {trip.materialJunior} </span>
                  {trip.sessionJunior.map((info) => (
                    <ul key={info}>
                      <li>{info}</li>
                    </ul>
                  ))}
                  <span className="trip-tarif-junior">Tarif membre : {trip.tarifJuniorMember}€  – Tarif extérieur : {trip.tarifJuniorExt}€ – Plein tarif : {trip.tarifJunior}€</span>
                </div>
              )
              : ''}
            <p className="trip-info">
              PREVOIR VOS MASQUES qui sont obligatoires dans le bâtiment
              et dans les casques de location ou une cagoule.
            </p>
          </div>
        </div>
        <div className="trip-containerMap">
          <Map className="mapContainer" coordinates={trip.coordinates} city={trip.adress} imgMap={trip.imgCard} />
        </div>
      </section>
    </div>
  </main>
);

Trip.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    circuit: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    imgCard: PropTypes.string.isRequired,
    classAdult: PropTypes.string,
    materialAdult: PropTypes.string,
    sessionAdult: PropTypes.array,
    tarifAdultMember: PropTypes.string,
    tarifAdultExt: PropTypes.string,
    tarifAdult: PropTypes.string,
    classYoung: PropTypes.string,
    materialYoung: PropTypes.string,
    sessionYoung: PropTypes.array,
    tarifYoungMember: PropTypes.string,
    tarifYoungExt: PropTypes.string,
    tarifYoung: PropTypes.string,
    classMinJunior: PropTypes.string,
    classMaxJunior: PropTypes.string,
    materialJunior: PropTypes.string,
    sessionJunior: PropTypes.array,
    tarifJuniorMember: PropTypes.string,
    tarifJuniorExt: PropTypes.string,
    tarifJunior: PropTypes.string,
    photosTrip: PropTypes.array,
    coordinates: PropTypes.array.isRequired,
    date: PropTypes.string,
  }),
};

Trip.defaultProps = {
  trip: null,
};

export default Trip;
