'use strict';

const UsersModel = {};
const db = require('../../db');

UsersModel.getUserById = async function (userId) {
  const user = await db.getUserById(userId);
  if (user === null) {
    return {};
  }
  return user;
};

UsersModel.getUserByUsername = async function(username) {
  const user = await db.getUserByUsername(username);
  if (user === null) {
    return {};
  }
  return user;
}

UsersModel.getAllUsers = async function({ limit = 5, offset = 0}) {
  const users = await db.getAllUsers({ limit, offset });
  return users;
}

module.exports = UsersModel;
