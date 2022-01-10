const AccountsService = require('../../../services/usecases/Accounts.service')
const { Account } = require('../../models')

class AccountProcedules {

    async find(where) {
        try {
            if (where) return await Account.findOne(where)
            return await Account.findAll()
        } catch (error) {
            console.log(error)
            return false

        }
    }
    async init() {
        try {
            //  const { name, username, password, type, userTypeLogged } = objCreateAccount
            return await Account.findAll()
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async create(objCreateAccount) {
        try {
            const { name, username, password, type, userTypeLogged } = objCreateAccount
            const permission_service = await AccountsService.UseCaseCreate(userTypeLogged, type, id)
            return await Account.create({ name, username, password: await hashPass(password), type: permission_service })
        } catch (error) {
            return false
        }
    }
    async update() {

    }
    async delete() {

    }
}



module.exports = new AccountProcedules