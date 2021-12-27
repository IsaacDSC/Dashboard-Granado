const { Lots } = require("../../models")

class LotsProcedules {
    async create(data) {
        try {
            const { item, desc, lot, module, line, nominalProductHour, initProductionDate, endProductionDate, quantityPredicted, quantityReal, userId } = data
            const created = await Lots.create({ item, desc, lot, module, line, nominalProductHour, initProductionDate, endProductionDate, quantityPredicted, quantityReal, userId })
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = new LotsProcedules