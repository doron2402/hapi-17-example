'use strict'

const Joi = require('joi');

const usersController = require('./controller');

async function register (server, options) {
  server.route([{
    method: 'GET',
    path: '/users',
    handler: usersController.getAllUsers
  }, {
    method: 'GET',
    path: '/users/{user_id}',
    handler: usersController.getUserById,
    config: {
      validate: {
        params: {
          user_id: Joi.number().integer().required().min(-1).description('user_id must be an integer')
        }
      }
    }
  }, {
    method: 'DELETE',
    path: '/users/{user_id}',
    handler: usersController.deleteUserById,
    config: {
      validate: {
        params: {
          user_id: Joi.number().integer().required().min(-1).description('user_id must be an integer')
        }
      }
    }
  }]);
}

module.exports = {
  register,
  name: 'users-plugins-v1.0.0'
}
