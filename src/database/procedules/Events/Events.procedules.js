const { Events } = require('../../models')


class EventsProcedules {
    async create(data) {
        try {
            const { dateEvent, initHR, endHR, event, subEvent, equipment, notes, userId_include } = data
            const created = await Events.create({ dateEvent, initHR, endHR, event, subEvent, equipment, notes, userId_include })
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async find(where) {
        try {
            if (!where) return await Events.findAll()
            return await Events.findAll(where)
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = new EventsProcedules