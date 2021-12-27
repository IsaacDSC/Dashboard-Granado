class EventsController {
    async index(req, res) {
        res.render('events/createEvents')
    }
    async create(req, res) {
        try {
            const { dateEvents, hourInit, hourEnd, events, subEvents, devices, notes } = req.body

        } catch (error) {
            console.log(error)
            return res.status(500)
        }

    }
}

module.exports = new EventsController