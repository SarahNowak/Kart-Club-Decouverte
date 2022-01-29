import { LOGOUT, AUTOCONNECT, getUserData } from 'src/actions/user';

const app = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGOUT: {
      localStorage.removeItem('token');
      next(action);
      break;
    }
    case AUTOCONNECT: {
      const token = localStorage.getItem('token');
      if (token != null) {
        store.dispatch(getUserData());
      }
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default app;
