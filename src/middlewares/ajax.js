import { VERIFIED_RECAPTCHA } from 'src/actions/contact';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const ajax = (store) => (next) => async (action) => {
  switch (action.type) {
    case VERIFIED_RECAPTCHA: {
      const { RECAPTCHA_SERVER_KEY } = '6LeGUgAdAAAAABs75jZOtbWVDvitaYnxUvD5aYxH';
      const humanKey = action.value;

      // Validate Human
      const isHuman = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`,
      })
        .then((res) => res.json())
        .then((json) => json.success)
        .catch((err) => {
          throw new Error(`Error in Google Siteverify API. ${err.message}`);
        });

      if (humanKey === null || !isHuman) {
        throw new Error('YOU ARE NOT A HUMAN.');
      }

      // The code below will run only after the reCAPTCHA is succesfully validated.
      console.log('SUCCESS!');
      break;
    }

    default:
      next(action);
  }
};

export default ajax;
