import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import FormBecomeMember from '../FormBecomeMember';

const BecomeMember = () => (
  <main className="becomeMember">
    <h1 className="becomeMember-title">Adhésion</h1>
    <section className="becomeMember-container">
      <div className="becomeMember-container-presentation">
        Si notre projet vous intéresse et que vous souhaitez devenir membre pratiquant
        dans l’association Kart Club Découverte, remplissez ce formulaire. Le montant
        de l’adhésion pour 1 an à l’association est de :
      </div>
      <div className="becomeMember-tarifYear">
        <h2 className="becomeMember-tarifYear-title">Tarifs 2021-2022</h2>
        <table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>1ère année</td>
              <td>2ème année*</td>
              <td>3ème année* et +</td>
            </tr>
            <tr>
              <td>7-13 ans</td>
              <td>40€</td>
              <td>35€</td>
              <td>30€</td>
            </tr>
            <tr>
              <td>14-15 ans</td>
              <td>50€</td>
              <td>45€</td>
              <td>40€</td>
            </tr>
            <tr>
              <td>16 ans et +</td>
              <td>60€</td>
              <td>55€</td>
              <td>50€</td>
            </tr>
          </tbody>
        </table>
        <p>
          * années consécutives
        </p>
      </div>
      <div className="becomeMember-tarifFamily">
        <h2 className="becomeMember-tarifFamily-title">Tarifs « Famille »</h2>
        <p>
          Réduction de 5€ par personne dès 2 adhérents par foyer.
        </p>
      </div>
      <div className="becomeMember-tarifSponsor">
        <h2 className="becomeMember-tarifSponsor-title">Parrainage</h2>
        <p>
          Avoir de 5€ pour le parrain, valable lors d’une sortie karting avec l’association,
          pour tout parrainage hors foyer.
        </p>
      </div>
      <div className="becomeMember-infoSup">
        <h2 className="becomeMember-infoSup-title">Inscription en cours d'année</h2>
        <p>
          Pour toute inscription en cours d’année (année sportive 2021-2022),
          nous contacter au préalable au 06.88.15.83.01 ou sur contact@kart-club-decouverte.fr
          pour connaitre votre tarif spécial au prorata des mois restants jusqu’au 31 août 2022.
        </p>
      </div>
      <div className="becomeMember-payment-container">
        <h2 className="becomeMember-payment-title">2 moyens pour régler votre adhésion :</h2>
        <div className="becomeMember-container-payment">
          <div className="becomeMember-payment">
            <h2 className="payment-title">Virement</h2>
            <p>
              Le paiement de l’adhésion est à faire par virement bancaire
              sur l’IBAN de l’association :
            </p>
            <p>
              FR76 1470 6000 1473 9637 1747 193
            </p>
            <p>
              Afin de pouvoir identifier votre virement, merci d’indiquer votre nom
              et prénom sur l’ordre de virement.
            </p>
          </div>
          <div className="becomeMember-payment">
            <h2 className="payment-title">Chèque</h2>
            <p>
              Vous pouvez régler votre adhésion par chèque à l’ordre de Kart
              Club Découverte et en l’envoyant à l’adresse :
            </p>
            <p>
              Kart Club Découverte
              <br />
              9 La Profissais
              <br />
              44320 SAINT VIAUD
            </p>
          </div>
        </div>
      </div>
    </section>
    <FormBecomeMember />
  </main>
);

BecomeMember.propTypes = {

};

export default BecomeMember;
