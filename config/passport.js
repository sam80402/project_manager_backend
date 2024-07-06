const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback', // Replace with your callback URL
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("Into Google Strategy");
      //   console.log(profile);
      console.log("=======================");
      let foundUser = await User.findOne({ googleID: profile.id }).exec();
      if (foundUser) {
        console.log("User already sign up...");
        done(null, foundUser);
      } else {
        console.log("New user, need to save data.");
        let newUser = new User({
          name: profile.displayName,
          googleID: profile.id,
          email: profile.emails[0].value,
        });
        let savedUser = await newUser.save();
        console.log("Already created a new user!");
        done(null, savedUser);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("Into serializeUser part...");
  console.log(user);
  done(null, user._id);
});

passport.deserializeUser(async (_id, done) => {
  console.log("Into deserializeUser part...");
  let foundUser = await User.findOne({ _id }).exec();
  done(null, foundUser);
});


module.exports = passport;