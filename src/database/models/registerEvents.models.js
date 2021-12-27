const { Sequelize, DataTypes } = require('sequelize');
const { conn } = require('../conn')

const RegisteredEvents = conn.define('registeredEvents', {
    dateEvent: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    initHR: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endHR: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subEvent: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equipment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId_include: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId_delete: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantityReal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {});

//RegisteredEvents.sync({ force: true })
module.exports = { RegisteredEvents }