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
import MyFamilyPage from 'src/containers/MyFamilyPage';
import Home from 'src/containers/Home';
import Footer from '../Footer';
import Error from '../Error';
import AssociationPage from '../AssociationPage';
import BecomeMember from '../BecomeMember';
import OurPartners from '../OurPartners';
import MyTripsPage from '../MyTripsPage';
import SubscribeMonthTrip from '../SubscribeMonthTrip';

// == Composant
const App = ({ getTrips, isLogged, tryAutoconnect }) => {
  useEffect(getTrips, []);

  useEffect(tryAutoconnect, []);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

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
          {!isLogged ? <Login /> : <SubscribeMonthTrip />}
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
  getTrips: PropTypes.func.isRequired,
};

App.defaultProps = {

};

// == Export
export default App;
