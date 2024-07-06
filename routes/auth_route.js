const router = require('express').Router();
const passport = require('passport');

router.post("/login", (req, res) => {

});

router.post("/register", (req, res) => {

});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    // Successful authentication, redirect to home page or any other desired route
    res.redirect("/");
});
module.exports = router;