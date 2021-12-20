/* const AccountsProcedules = require("../database/procedules/AccountsProcedules")
const passport = require('passport') */

class AccountController {
    async index(req, res) {
            res.render('account/login', { layout: 'account.hbs' })
        }
        /*  async account(req, res, next) {
             passport.authenticate('local', {
                 successRedirect: '/',
                 failureRedirect: '/account',
                 failureFlash: true
             })(req, res, next)
         }
         async update(req, res) {

         }
         async delete(req, res) {

         }
         async create(req, res) {
             const created = await AccountsProcedules.create('acrocha', 'admin1@admin.com', 'joaquim.2018')
             if (created) res.json({ created: created, message: 'Registrado com sucesso' })
             else res.json({ message: 'Houve um problema!' })
         } */

}


module.exports = new AccountController