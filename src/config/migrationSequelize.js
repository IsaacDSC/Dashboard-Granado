const { Environment } = require('../config/environments')

module.exports = {
    dialect: 'mssql',
    database: Environment.Database.databaseName,
    host: Environment.Database.hostname,
    port: Environment.Database.port,
    username: Environment.Database.username,
    password: Environment.Database.password,
};