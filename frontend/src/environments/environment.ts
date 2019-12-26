/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'lexie', // the auth0 domain prefix
    audience: 'https://coffee-shop-api.net', // the audience set for the auth0 app
    clientId: 'NkUk3gjSwf68vHI1qH4aovsY46T2YdvS', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
