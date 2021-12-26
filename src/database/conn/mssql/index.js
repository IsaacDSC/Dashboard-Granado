const { Environment } = require('../../../config/environments')
const Connection = require('tedious').Connection;

const config = {
    server: Environment.Database.hostname, //update me
    authentication: {
        type: 'default',
        options: {
            userName: Environment.Database.username, //update me
            password: Environment.Database.password //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: Environment.Database.databaseName //update me
    }
};

const db = new Connection(config).connect()



module.exports = { db }