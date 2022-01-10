const LotsProcedules = require("../database/procedules/Lots/Lots.procedules")

class LotsSpecificationController {
    async index(req, res) {
        const lots = await LotsProcedules.find()
        res.render('specification/lots', { lots })
    }
    async foundLote(req, res) {
        res.render('specification/foundLot')
    }
    async createView(req, res) {
        try {
            res.render('specification/createLots')
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
    async create(req, res) {
        try {
            const created = await LotsProcedules.create(req.body)
            if (created) res.redirect('/lots')
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}


module.exports = new LotsSpecificationController