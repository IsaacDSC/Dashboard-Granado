class DashboardController {
    async index(req, res) {
        res.render('dashboard/dashboard')
    }
}


module.exports = new DashboardController