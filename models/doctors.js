const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Doctors = sequelize.define('doctors', {
    doctorsID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'users',
            key: 'userID'
        }
    },
    createdby: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'users',
            key: 'userID'
        }
    },
    departementsID: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'departements',
            key: 'departementsID'
        }
    },
    hospitalsID: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        references: {
            model: 'hospitals',
            key: 'hospitalsID'
        }
    }
});

module.exports = Doctors;
