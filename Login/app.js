require('dotenv').config()

const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')

const app = express()

require('./passportSetup')

app.set("view engine", "ejs")

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.use(passport.initialize())

app.use(cookieSession({
    name: 'tut-session',
    keys: ['key1', 'key2']
}))

app.use(passport.session())

app.get('/',(req, res) => {
    res.render("pages/index")
})

app.get('/success', isLoggedIn, (req, res) => {
    res.render('pages/profile', {
        name: req.user.displayName,
        photo: req.user.photos[0].value
    })
})

app.get('/google', passport.authenticate('google',{scope:['profile', 'email']}))

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/failed'}),
(req, res) => {
    res.redirect('/success');
})

app.listen(5000,() => {
    console.log("App is Running on port 5000")
})