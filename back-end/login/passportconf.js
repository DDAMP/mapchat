
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;




module.exports = function(passport) {

  passport.use(new GoogleStrategy({
    clientID: '422392118616-notj6bg62dquu3d20b4na1p6op7gov6o.apps.googleusercontent.com',
    clientSecret: '5hk-xZntIVwQJEayrmLgSyol',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log(profile);
      return done( profile);
    });
  }
));


 passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};