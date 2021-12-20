const express = require('express')
const routes = express()

routes.get('/', (req, res) => {
    res.render('dashboard/dashboard')
})


module.exports = routes