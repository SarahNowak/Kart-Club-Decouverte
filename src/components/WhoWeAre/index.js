import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const WhoWeAre = () => (
  <main className="whoWeAre-container">
    <h2 className="whoWeAre-title"> Qui sommes-nous ?</h2>
    <div className="whoWeAre-text">
      <p>
        Kart Club Découverte est une association loi 1901 qui souhaite
        <span className="whoWeAre-span"> faire
          découvrir et rendre accessible au plus grand nombre
          (petits et grands) la pratique du karting,
        </span> avec plusieurs
        moyens d'action sportifs et solidaires :
      </p>
      <br />
      <p>
        - Tel un club de randonnée, KCD organise des sorties découvertes "clés en mains" à
        tarif préférentiel pour les membres pratiquants afin de découvrir divers circuits
        de la région ou de départements limitrophes, sous forme de roulage type location,
        de course loisir, challenges...
      </p>
      <br />
      <p>
        - <span className="whoWeAre-span">KCD équipe progressivement les pilotes de l’association </span>
        pour apporter plus de
        sécurité et de confort lors des sorties (combinaisons, gants, minerves,
        protège-côtes, chaussures, casques).
      </p>
      <br />
      <p>
        -  <span className="whoWeAre-span">Des "Actions Solidaires" </span>de la pratique du kart pour un large public.
        Ces journées ont pour but de réunir enfants et/ou adultes autour de la pratique
        du kart pour un public à budget restreint : familles nombreuses,
        Maisons d'Enfance à Caractère Social (MECS), écoles...
      </p>
    </div>
  </main>
);

WhoWeAre.propTypes = {

};

export default WhoWeAre;
