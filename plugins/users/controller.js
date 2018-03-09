'use stirct';

const UsersModel = require('./model');
const Hoek = require('hoek');
const Boom = require('boom');

module.exports = {
  getAllUsers: async function (request, h) {
    const users = await UsersModel.getAllUsers(request.query);
    if (users === null || users.length === 0) {
      return Boom.notFound('users not found');
    }
    return users;
  },
  getUserById: function(request, h) {
    const userId = parseInt(request.params.user_id);
    const user = UsersModel.getUserById(userId);
    if (user === null || Hoek.deepEqual(user, {})) {
      return Boom.notFound('user not found');
    }
    return user;
  },
  getUserByUsername: async function(request, h) {
    const username = request.params.username;
    const user = await UsersModel.getUserByUsername(username);
    if (user === null || Hoek.deepEqual(user, {})) {
      return Boom.notFound('user not found');
    }
    return user;
  },
  deleteUserById: function(request, h) {
    return {
      action: 'delete',
      success: true
    };
  }
};
