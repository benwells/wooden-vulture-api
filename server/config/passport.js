let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt  = require('passport-jwt').ExtractJwt;
let User        = require('../models/users');
let config      = require('../../secret');

// Setup work and export for the JWT passport strategy
export default function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
