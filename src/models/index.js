const sequelize = require('../config/database');
const Song = require('./song');
const Branch = require('./branch');
const Revival = require('./revival');

const db = {
    sequelize,
    Song,
    Branch,
    Revival
};

module.exports = db;
