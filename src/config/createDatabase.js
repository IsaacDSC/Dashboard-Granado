const { conn } = require('../database/conn')
const { Account, RegisteredEvents, Registered, Events } = require('../database/models')

const DATABASES = [Account, RegisteredEvents, Registered, Events]

const Run = async () => {
    try {
        DATABASES.forEach((element) => {
            element.sync({ force: true })
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { CREATE_TABLE: Run }