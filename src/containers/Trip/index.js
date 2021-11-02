import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Trip from 'src/components/Trip';

import { findTrip } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  trip: findTrip(state.trips.list, ownProps.match.params.id),
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Trip);
// on enrichi le conteneur avec des props liés à l'url
const containerWithRouter = withRouter(container);
// c'est le conteneur enrichi qu'on exporte
export default containerWithRouter;
