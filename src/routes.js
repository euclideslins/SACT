const UserController = require("./app/controllers/UserController");
const ProjectController = require("./app/controllers/ProjectController");
const Login = require('./app/controllers/Authenticate/Login');

const auth = require('./app/middlewares/UserAuthenticate');


module.exports = app => {
   

    app.post('/validateToken', Login.validateToken);
    app.post('/login', Login.signIn);

    app.route('/users')
    //   .all(auth)
      .get(UserController.Index)
      .post(UserController.store);

    app.route('/users/:id')
        .get(UserController.show)
        .put(UserController.update)
        .delete(UserController.delete);    

    app.route('/projects')
        // .all(auth)
        .get(ProjectController.Index)
        .post(ProjectController.store);

    app.route('/projects/:id')
        // .all(auth)
        .get(ProjectController.show)
        .put(ProjectController.update)
        .delete(ProjectController.delete);
}   