// Generated by CoffeeScript 1.6.1
(function() {

  exports.authenticateUser = function(req, res) {
    var result;
    result = this.isLoginUser(req);
    if (!result) {
      res.redirect('/login');
    }
    return result;
  };

  exports.isLoginUser = function(req) {
    return req.session.userId && true;
  };

  exports.authenticateAdmin = function(req, res) {
    var result;
    result = this.isAdmin(req);
    if (!result) {
      if (this.isLoginUser(req)) {
        res.redirect('/show');
      } else {
        res.redirect('/login');
      }
    }
    return result;
  };

  exports.isAdmin = function(req) {
    return this.isLoginUser(req) && req.session.isAdmin === 1;
  };

}).call(this);
