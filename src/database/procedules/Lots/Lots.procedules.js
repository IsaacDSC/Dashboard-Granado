const { Lots } = require("../../models")

class LotsProcedules {
    async create(data) {
        try {
            const { item, desc, lot, module, line, nominalProductHour, initProductionDate, quantityPredicted, quantityReal, userId } = data
            const created = await Lots.create({ item, desc, lot, module, line, nominalProductHour: String(nominalProductHour), initProductionDate: String(initProductionDate), quantityPredicted, quantityReal, userId: '1' })
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async find(where) {
        try {
            if (!where) return await Lots.findAll()
            return await Lots.findAll(where)
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = new LotsProcedules