require('dotenv').config()

module.exports = {
    Environment: {
        Database: {
            databaseName: process.env.DB_NAME,
            hostname: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    }
}