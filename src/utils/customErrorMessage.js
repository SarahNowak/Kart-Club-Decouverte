/* eslint-disable import/prefer-default-export */
/* See middleware/ajax.js (ie for create user) :
The error messages received in the http response are incorrect and cannot be used directly
as a workaround we will use a function to create a correct message using the http response
*/

/**
 * Create a custom error message from the string receive in http response
 * @param {String} httpResp
 */
export function customErrorMessage(httpResp) {
  let message = '';
  if (httpResp.includes('adresse email valide')) {
    message += 'L\'adresse email n\'est pas valide. ';
  }
  if (httpResp.includes('Pseudo')) {
    message += 'Le pseudo n\'est pas valide. ';
  }
  if (httpResp.includes('blank')) {
    message += 'Tous les champs doivent être remplis. ';
  }
  if (httpResp.includes('already used')) {
    message += 'Cette adresse mail est déjà utilisée, veuillez en saisir une autre. ';
  }
  return message;
}
