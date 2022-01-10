const { Sequelize, DataTypes } = require('sequelize');
const { conn } = require('../conn')
const { Account } = require('./account')


const Lots = conn.define('lots', {
    item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lot: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    module: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    line: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nominalProductHour: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    initProductionDate: {
        type: DataTypes.DATE,
    },
    endProductionDate: {
        type: DataTypes.DATE,
    },
    quantityPredicted: {
        type: DataTypes.FLOAT,
    },
    quantityReal: {
        type: DataTypes.FLOAT,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id'
        }
    },
}, {});

//Events.sync({ force: true })
module.exports = { Lots }