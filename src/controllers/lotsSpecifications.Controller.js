const LotsProcedules = require("../database/procedules/Lots/Lots.procedules")

class LotsSpecificationController {
    async index(req, res) {
        res.render('specification/lots')
    }
    async search(req, res) {

    }
    async foundLote(req, res) {
        res.render('specification/foundLot')
    }
    async create(req, res){
        try {
            const created = await LotsProcedules.create(req.body)
            return created
        } catch (error) {
            console.log(error)
            return false
            
        }
    }
}


module.exports = new LotsSpecificationController