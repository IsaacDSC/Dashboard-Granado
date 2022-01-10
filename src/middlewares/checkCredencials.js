const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const { Account } = require('../database/models/account')
const { AccountProcedules } = require('../database/procedules')

module.exports = function(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {
        AccountProcedules.find({ where: { username } }).then((user) => {
            if (!user) {
                return done(null, false, { message: 'Sua conta ou senha está incorreta.' })
            }
            bcrypt.compare(password, user.password, (err, batem) => {
                if (batem) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: "Sua conta ou senha está incorreta." })
                }
            })
        })
    }))

    passport.serializeUser((user, done) => {
        //console.log('salvo id do usuario: ' + user.id)
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        //console.log('this:' + id)
        //done(id)
        AccountProcedules.find({ where: { id } }).then((user) => {
            done(null, user)
        })
    })
}