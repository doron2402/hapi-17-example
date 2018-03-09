'use strict'

const Joi = require('joi');

const usersController = require('./controller');

async function register (server, options) {
  server.route([{
    method: 'GET',
    path: '/users',
    handler: usersController.getAllUsers,
    config: {
      validate: {
        query: {
          offset: Joi.number().integer().min(0).default(0).description('offset number of results'),
          limit: Joi.number().integer().min(1).default(100).description('limit number of results')
        }
      }
    }
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
    method: 'GET',
    path: '/users/username/{username}',
    handler: usersController.getUserByUsername,
    config: {
      validate: {
        params: {
          username: Joi.string().required().description('username is required')
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
