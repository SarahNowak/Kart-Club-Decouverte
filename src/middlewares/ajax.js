import { VERIFIED_RECAPTCHA } from 'src/actions/contact';
import { CREATE_USER_IN_DB, toggleLoadingSubmitStatus, resetUserRegistrationForm } from 'src/actions/registration';
import { setHttpErrorMessage } from 'src/actions/settings';
import { customErrorMessage } from 'src/utils/customErrorMessage';
import { connectUser, CONNECT_USER, resetUserLoginForm } from '../actions/login';
import {
  getUserData,
  GET_USER_DATA,
  login,
  storeUserData,
} from '../actions/user';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const ajax = (store) => (next) => async (action) => {
  const localUrl = 'http://localhost:8000';
  const serverUrl = 'http://ec2-18-117-83-12.us-east-2.compute.amazonaws.com/kart_club_decouverte_back/public';

  const rootUrl = serverUrl;

  switch (action.type) {
    case VERIFIED_RECAPTCHA: {
      const RECAPTCHA_SERVER_KEY = '6LeGUgAdAAAAABs75jZOtbWVDvitaYnxUvD5aYxH';
      const humanKey = action.value;

      // Validate Human
      const isHuman = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        body: `secret=${RECAPTCHA_SERVER_KEY} &response=${humanKey}`,
      })
        .then((res) => res.json())
        .then((json) => json.success)
        .catch((err) => {
          throw new Error(`Error in Google Siteverify API. ${err.message}`);
        });

      if (humanKey === null || !isHuman) {
        throw new Error('YOU ARE NOT A HUMAN.');
      }
      break;
    }

    // This action will trigger the http request to create a new user in db
    case CREATE_USER_IN_DB: {
      const Endpoint = '/api/user/create_user';
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');

      const userData = {
        pseudo: action.pseudo,
        email: action.email,
        password: action.password,
      };

      const fetchOptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: myHeaders,
        body: JSON.stringify(userData),
      };

      try {
        store.dispatch(toggleLoadingSubmitStatus());
        const response = await fetch(rootUrl + Endpoint, fetchOptions);

        if (response.ok) {
          const data = await response.json();
          console.log(`New User created next to api call on ${Endpoint} = `, data);
          store.dispatch(resetUserRegistrationForm());
          store.dispatch(connectUser(action.email, action.password));
          return true;
        }
        console.error(`Erreur du serveur : ${response.status}`);

        if (response.status === 400) {
          const data = await response.json();
          const workaroundMessage = customErrorMessage(data.errors);
          store.dispatch(setHttpErrorMessage(true, workaroundMessage));
          store.dispatch(toggleLoadingSubmitStatus());
          return true;
        }
      }

      catch (error) {
        console.error(error);
      }

      next(action);
      break;
    }

    /* This action will trigger the http request to connect a user by checking if the username
    and password exists in db and by providing a jwt */
    case CONNECT_USER: {
      const Endpoint = '/api/login_check';
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const userData = {
        username: action.email,
        password: action.password,
      };

      const fetchOptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: myHeaders,
        body: JSON.stringify(userData),
      };

      try {
        const response = await fetch(rootUrl + Endpoint, fetchOptions);
        console.log(`Response from api call on ${Endpoint} = `, response);

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          store.dispatch(resetUserLoginForm());
          store.dispatch(getUserData());
          return true;
        }
        console.error(`Erreur du serveur : ${response.status}`);

        if (response.status === 401) {
          store.dispatch(setHttpErrorMessage(true, 'Cet utilisateur n\'existe pas ou le mot de passe est incorrect'));
          return true;
        }
      }

      catch (error) {
        console.error(error);
      }

      next(action);
      break;
    }

    // This action will trigger the http request to collect the user data
    case GET_USER_DATA: {
      const Endpoint = '/api/user/current';
      const token = `Bearer ${localStorage.getItem('token')}`;
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', token);

      const fetchOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: myHeaders,
      };

      try {
        console.log(`ajax middleware -> Init Ajax request on ${Endpoint}`);
        const response = await fetch(rootUrl + Endpoint, fetchOptions);
        console.log(`Response from api call on ${Endpoint} = `, response);

        if (response.ok) {
          const data = await response.json();
          console.log(`User data collected from api call on ${Endpoint} = `, data);
          // Update the store with user data
          store.dispatch(storeUserData(data));
          // Update the user loggedIn status
          store.dispatch(login());
          // return true for promise resolution purpose
          return true;
        }
        console.error(`Erreur du serveur : ${response.status}`);
      }

      catch (error) {
        console.error(error);
      }

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default ajax;
