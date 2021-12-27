const { Sequelize, DataTypes } = require('sequelize');
const { conn } = require('../conn')
const {Account} = require('./account')

const Events = conn.define('events', {
    dateEvent: {
        type: DataTypes.DATE,
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
        type: DataTypes.TEXT,
        allowNull: true,
    },
    userId_include: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id'
        }
    },
    userId_delete: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

}, {});

//RegisteredEvents.sync({ force: true })
module.exports = { Events }


