const sequelize = require('../config/database');
const Artist = require('./artist');
const Album = require('./album');
const Song = require('./song');
const Branch = require('./branch');
const Revival = require('./revival');

// Associations
Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album);

module.exports = {
    sequelize,
    Artist,
    Album,
    Song,
    Branch,
    Revival
};
