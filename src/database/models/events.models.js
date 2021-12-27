const { Sequelize, DataTypes } = require('sequelize');
const { conn } = require('../conn')

const Events = conn.define('events', {
    category: {
        type: DataTypes.DATE,
        allowNull: false
    },
    events: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subEvents: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {});

//Events.sync({ force: true })
module.exports = { Events }