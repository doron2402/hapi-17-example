'use stirct';

module.exports = {
  getAllUsers: function (request, h) {
    return ([{ user_id: 1, name: 'a' }, { user_id:2, name: 'b' }]);
  },
  getUserById: function(request, h) {
    return {
      user_id: parseInt(request.params.user_id),
      username: 'd'
    };
  },
  deleteUserById: function(request, h) {
    return {
      action: 'delete',
      success: true
    };
  }
};
