const { Sequelize, DataTypes } = require('sequelize');
const { conn } = require('../conn')

const Account = conn.define('account', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    active: {
        type: DataTypes.STRING,
        defaultValue: true
    }
}, {});

//Account.sync({ force: true })
module.exports = { Account }