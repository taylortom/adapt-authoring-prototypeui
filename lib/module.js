const path = require('path');
const { Module, Requester, Responder } = require('adapt-authoring-core');

class PrototypeUI extends Module {
  preload(app, resolve, reject) {
    // API
    app.getModule('server').createRouter('/prototype')
      .get('/', this.handleIndex)
      .get('/users', this.handleUsers);

    resolve();
  }

  handleIndex(req, res, next) {
    res.render(path.join(__dirname, '../views/index'));
  }

  handleUsers(req, res, next) {
    let users, error;
    new Requester('/users').get()
      .then(result => users = result.data.data)
      .catch(result => error = result)
      .finally(() => res.render(path.join(__dirname, '../views/users'), { users, error }));
  }
}

module.exports = PrototypeUI;
