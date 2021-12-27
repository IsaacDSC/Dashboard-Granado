const { Sequelize, DataTypes } = require('sequelize');
const { conn } = require('../conn')

const Registered = conn.define('registered', {
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
    nominalProduct: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    initProductionDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endProductionDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantityPredicted: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantityReal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {});

//Events.sync({ force: true })
module.exports = { Registered }