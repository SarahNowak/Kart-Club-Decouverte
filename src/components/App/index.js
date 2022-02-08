// == Import npm
import React, { useEffect } from 'react';

// == Import
import './style.scss';
import {
  Redirect, Route, Switch, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import components
import AppHeader from 'src/containers/AppHeader';
import WhoWeAre from 'src/components/WhoWeAre';
import Contact from 'src/containers/Contact';
import Trip from 'src/containers/Trip';
import TripsList from 'src/containers/TripsList';
import Login from 'src/containers/Login';
import Registration from 'src/containers/Registration';
import MyProfilPage from 'src/components/MyProfilPage';
import MyInfoPage from 'src/containers/MyInfoPage';
import ConfirmationMessage from 'src/containers/ConfirmationMessage';
import Home from '../Home';
import Footer from '../Footer';
import Error from '../Error';
import AssociationPage from '../AssociationPage';
import BecomeMember from '../BecomeMember';
import OurPartners from '../OurPartners';
import Subscribe from '../Subscribe';
import MyFamilyPage from '../MyFamilyPage';
import MyTripsPage from '../MyTripsPage';

// == Composant
const App = ({ isLogged, tryAutoconnect }) => {
  // je rend mon composant dépendant de l'adresse actuelle
  // il sera rerendu chaque fois que l'adresse change
  const location = useLocation();
  // pour chaque rendu ou location (l'adresse) change
  useEffect(() => {
    // je reviens en haut
    window.scroll(0, 0);
  }, [location]);

  useEffect(tryAutoconnect, []);

  return (
    <div className="app">
      <AppHeader />
      <ConfirmationMessage />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/association" exact>
          <AssociationPage />
        </Route>
        <Route path="/les-sorties" exact>
          <TripsList />
        </Route>
        <Route path="/devenir-membre" exact>
          <BecomeMember />
        </Route>
        <Route path="/nos-partenaires" exact>
          <OurPartners />
        </Route>
        <Route path="/sortie/:id" exact>
          <Trip />
        </Route>
        <Route path="/nous-contacter" exact>
          <Contact />
        </Route>
        <Route path="/qui-sommes-nous" exact>
          <WhoWeAre />
        </Route>
        <Route path="/inscription-sortie" exact>
          <Subscribe />
        </Route>
        <Route path="/connexion" exact>
          {!isLogged ? <Login /> : <Redirect to="mon-profil" />}
        </Route>
        <Route path="/mon-profil" exact>
          {!isLogged ? <Login /> : <MyProfilPage />}
        </Route>
        <Route path="/creer-mon-compte" exact>
          {!isLogged ? <Registration /> : <Redirect to="mon-profil" />}
        </Route>
        <Route path="/mes-informations" exact>
          {!isLogged ? <Login /> : <MyInfoPage />}
        </Route>
        <Route path="/ma-famille" exact>
          {!isLogged ? <Login /> : <MyFamilyPage />}
        </Route>
        <Route path="/mes-sorties" exact>
          {!isLogged ? <Login /> : <MyTripsPage />}
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  tryAutoconnect: PropTypes.func.isRequired,
};

App.defaultProps = {

};

// == Export
export default App;
