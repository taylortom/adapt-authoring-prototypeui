const path = require('path');
const { Module, Requester, Responder } = require('adapt-authoring-core');
/**
* Provides a UI for the prototype functionality
* @extends {Module}
*/
class PrototypeUI extends Module {
  /**
  * Initialises the API
  * @param {App} app App instance
  * @param {Function} resolve Function to call on fulfilment
  * @param {Function} reject Function to call on rejection
  */
  preload(app, resolve, reject) {
    const server = app.getModule('server');
    server.root.addMiddleware(server.static(path.resolve(__dirname, '..', 'public')));
    server.root.createChildRouter('prototype')._router
        .get('/', this.handleIndex)
        .get('/users', this.handleUsers.bind(this));

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
    new Requester(`${this.app.config.get('adapt-authoring-server.url')}/api/users`).get()
      .then(result => users = result.data.data)
      .catch(result => error = result)
      .finally(() => res.render(path.join(__dirname, '../views/users'), { users, error }));
  }
}

module.exports = PrototypeUI;
