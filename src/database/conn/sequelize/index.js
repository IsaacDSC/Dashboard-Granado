const { Sequelize } = require('sequelize')
const { Environment } = require('../../../config/environments')


const conn = new Sequelize(Environment.Database.databaseName, Environment.Database.username, Environment.Database.password, {
    dialect: 'mssql',
    host: Environment.Database.hostname,

});



module.exports = { conn }