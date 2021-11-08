import { connect } from 'react-redux';

import { changeValueInTripsForm } from 'src/actions/trips';

import Search from 'src/components/Search';

const mapStateToProps = (state) => ({
  searchForm: state.searchTrips.searchForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeValueInTripsForm(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
