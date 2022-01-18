import { connect } from 'react-redux';

import ErrMessagesDisplayer from 'src/components/ErrMessagesDisplayer';

import { setHttpErrorMessage } from 'src/actions/settings';

const mapStateToProps = (state) => ({
  httpErrorMessage: state.settings.httpErrorMessage,
  showHttpErrorMessage: state.settings.showHttpErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeHttpErrorMessage: (bool, message) => {
    dispatch(setHttpErrorMessage(bool, message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrMessagesDisplayer);
