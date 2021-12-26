'use strict';
require('dotenv').config()
const { hashPass } = require('../src/helpers')


module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('accounts', [
            { name: 'Automação', username: 'Automação', password: await hashPass(process.env.PASSWORD_AUTOMATION), type: 100, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now()) },
            { name: 'Moderator', username: 'Moderator', password: await hashPass(process.env.PASSWORD_MODERATOR), type: 50, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now()) },
            { name: 'Granado', username: 'Granado', password: await hashPass(process.env.PASSWORD_USER), type: 10, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now()) },
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('accounts', null, {});

    }
};