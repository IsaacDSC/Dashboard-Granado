class LotsSpecificationController {
    async index(req, res) {
        res.render('specification/lots')
    }
    async search(req, res) {

    }
    async foundLote(req, res) {
        res.render('specification/foundLot')
    }
}


module.exports = new LotsSpecificationController