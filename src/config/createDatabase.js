const { conn } = require('../database/conn')
const { Account, Lots,  Events } = require('../database/models')

const DATABASES = [Account, Lots, Events]

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