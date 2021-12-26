const { hashPass } = require('../../helpers')
const { Account } = require('../../database/models')

class AccountService {
    async UseCaseCreate(userTypeLogged, type, id) {
        const user = await Account.findOne({ where: { id } })
        if (user != userTypeLogged) return { message: 'opção inválida' }
        switch (userTypeLogged) {
            case '100':
                return type
            case '50':
                if (userTypeLogged < type) return { message: 'opção inválida' }
                return type
            case '10':
                if (userTypeLogged < type) return { message: 'opção inválida' }
                return type
        }
    }
}



module.exports = new AccountService