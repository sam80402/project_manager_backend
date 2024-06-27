const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// 在這裡填入你的 Google OAuth 2.0 的 client ID 和 client secret
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const GOOGLE_CLIENT_SECRET = 'YOUR_GOOGLE_CLIENT_SECRET';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback' // 設定 Google 登入成功後的回呼 URL
  },
  (accessToken, refreshToken, profile, done) => {
    // 在這裡處理驗證成功後的邏輯
    // 例如，你可以在這裡將使用者資料存入資料庫，或是建立新的使用者帳號
    // 你可以使用 profile 物件中的資料來進行相關操作
    // 最後呼叫 done() 來結束驗證流程
    done(null, profile);
  }
));

// 序列化使用者資料
passport.serializeUser((user, done) => {
  done(null, user);
});

// 反序列化使用者資料
passport.deserializeUser((user, done) => {
  done(null, user);
});