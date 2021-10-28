// == Import npm
import React, { useEffect } from 'react';

// == Import
import './style.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import components
import AppHeader from 'src/containers/AppHeader';
import WhoWeAre from 'src/components/WhoWeAre';
import Home from '../Home';
import Footer from '../Footer';
import Error from '../Error';
import AssociationPage from '../AssociationPage';
import TripsList from '../TripsList';
import BecomeMember from '../BecomeMember';
import OurPartners from '../OurPartners';
import Trip from '../Trip';
import TripInProgressPage from '../TripInProgressPage';
import Contact from '../Contact';
// import Loading from './Loading';

// == Composant
const App = () => {
  // je rend mon composant dépendant de l'adresse actuelle
  // il sera rerendu chaque fois que l'adresse change
  const location = useLocation();
  // pour chaque rendu ou location (l'adresse) change
  useEffect(() => {
    // je reviens en haut
    window.scroll(0, 0);
  }, [location]);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div className="app">
      <AppHeader />
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
        <Route path="/sortie/circuit-solokart" exact>
          <Trip />
        </Route>
        <Route path="/sortie-du-mois" exact>
          <TripInProgressPage />
        </Route>
        <Route path="/nous-contacter" exact>
          <Contact />
        </Route>
        <Route path="/qui-sommes-nous" exact>
          <WhoWeAre />
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
  // loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

// == Export
export default App;
