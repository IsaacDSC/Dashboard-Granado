const { RegisteredEvents } = require('../../models')


class EventsProcedules {
    async create(data) {
        try {
            const { dateEvent, initHR, endHR, event, notes, userId_include, userId_delete, status, quantityReal } = data
            const created = await RegisteredEvents.create({ dateEvent, initHR, endHR, event, notes, userId_include, userId_delete, status, quantityReal })
            console.log(created)
            return created
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

module.exports = new EventsProcedules