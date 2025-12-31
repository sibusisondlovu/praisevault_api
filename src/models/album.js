const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Album = sequelize.define('Album', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    coverUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Album;
