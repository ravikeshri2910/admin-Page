
const Sequelize = require('sequelize');


const sequelize = require('../utill/database');


const Data = sequelize.define('adminAppData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type :Sequelize.STRING,
        allowNull : false
    },

    price: {
        type :Sequelize.STRING,
        allowNull : false
    }

});

module.exports = Data;