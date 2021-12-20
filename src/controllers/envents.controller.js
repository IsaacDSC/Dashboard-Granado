class EventsController {
    async index(req, res) {
        res.render('events/createEvents')
    }
}

module.exports = new EventsController