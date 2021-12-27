const express = require('express')
const routes = express()

//import middleware's
const { auth } = require('../middlewares/auth')

//imports controllers
const accountController = require('../controllers/account.controller')
const dashboardController = require('../controllers/dashboard.controller')
const lotsSpecificationsController = require('../controllers/lotsSpecifications.Controller')
const eventsController = require('../controllers/events.controller')


//general configure routes

//route dashboard
routes.get('/', dashboardController.index)


//route Specification lots
routes.get('/lots', lotsSpecificationsController.index)
routes.get('/lot/name', lotsSpecificationsController.foundLote)
routes.get('/events/create', eventsController.index)
routes.post('/events/create', eventsController.create)

//routes accounts
routes.get('/account/login', accountController.index)


module.exports = routes