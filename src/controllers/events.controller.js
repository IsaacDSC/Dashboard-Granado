const { EventsProcedules } = require('../database/procedules')

class EventsController {
    async index(req, res) {
        try {
            const events = await EventsProcedules.find()
            res.render('events/createEvents', { events })
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
    async create(req, res) {
        try {
            /* const { dateEvents, hourInit, hourEnd, events, subEvents, devices, notes } = req.body */
            const created = await EventsProcedules.create(req.body)
            if (!created) {
                return res.json({ status: '500' })
            }
            return res.redirect('/')

        } catch (error) {
            console.log(error)
            return res.status(500)
        }

    }
}

module.exports = new EventsController