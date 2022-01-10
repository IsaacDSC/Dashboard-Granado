const { AccountProcedules } = require("../database/procedules")
const passport = require('passport')

class AccountController {
    async index(req, res) {
        console.log(req.session.user)
        res.render('account/login', { layout: 'account.hbs' })
    }
    async account(req, res, next) {
        const user = await AccountProcedules.find({ where: { username: req.body.username } })
        req.session.user = {
            id: user.id,
            name: user.name,
            username: user.username,
            type: user.type
        }

        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/account/login',
            failureFlash: true
        })(req, res, next)
    }
    async update(req, res) {

    }
    async delete(req, res) {

    }
    async create(req, res) {
        const created = await AccountProcedules.create('acrocha', 'admin1@admin.com', 'joaquim.2018')
        if (created) res.json({ created: created, message: 'Registrado com sucesso' })
        else res.json({ message: 'Houve um problema!' })
    }
    logout(req, res) {
        req.logout()
        req.flash('success_msg', 'Deslogado com sucesso!')
        res.redirect('/account/login')
    }

}


module.exports = new AccountController