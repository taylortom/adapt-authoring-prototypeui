const path = require('path');
const { Module, Requester, Responder } = require('adapt-authoring-core');
/**
* Provides a UI for the prototype functionality
* @extends {Module}
*/
class PrototypeUI extends Module {
  /**
  * Initialises the API
  * @param {Module} app App instance
  * @param {Function} resolve Function to call on fulfilment
  * @param {Function} reject Function to call on rejection
  */
  preload(app, resolve, reject) {
    app.getModule('server').createRouter('/prototype')
      .get('/', this.handleIndex)
      .get('/users', this.handleUsers);

    resolve();
  }
  /**
  * Renders the index file
  * @param {ClientRequest} req The client request object
  * @param {ServerResponse} res The server response object
  * @param {function} next The next middleware function in the stack
  */
  handleIndex(req, res, next) {
    res.render(path.join(__dirname, '../views/index'));
  }
  /**
  * Renders the users file
  * @param {ClientRequest} req The client request object
  * @param {ServerResponse} res The server response object
  * @param {function} next The next middleware function in the stack
  */
  handleUsers(req, res, next) {
    let users, error;
    new Requester('/users').get()
      .then(result => users = result.data.data)
      .catch(result => error = result)
      .finally(() => res.render(path.join(__dirname, '../views/users'), { users, error }));
  }
}

module.exports = PrototypeUI;
