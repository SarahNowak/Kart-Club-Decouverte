import { connect } from 'react-redux';
import ConfirmationMessage from 'src/components/ConfirmationMessage';
import { setShowConfirmationMessage } from 'src/actions/settings';

const mapStateToProps = (state) => ({
  showConfirmationMessage: state.settings.showConfirmationMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeShowConfirmationMessage: (bool) => {
    dispatch(setShowConfirmationMessage(bool));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationMessage);
