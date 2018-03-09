'use strict';

const db = require('./db.json');

module.exports = {
  getUserById: async function (id) {
    let user = null;
    db.forEach((v) => {
      if (v.user_id === id) {
        user = v;
      }
    });
    return user;
  },
  getUserByUsername: async function (username) {
    let user = null;
    db.forEach((v) => {
      if (v.username === username) {
        user = v;
      }
    });
    return user;
  },
  getAllUsers: async function({ limit = 100, offset = 0 }) {
    return db.slice(offset, (offset + limit));
  }
};
