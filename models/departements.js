const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); 
const Users = require('./users'); 

const Departements = sequelize.define('departements', {
    departementsID: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    createdby: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Users,
            key: 'userID',
        },
    },
});

module.exports = Departements;
