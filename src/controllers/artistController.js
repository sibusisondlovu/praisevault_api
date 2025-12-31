const { Artist } = require('../models');

exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createArtist = async (req, res) => {
    try {
        const artist = await Artist.create(req.body);
        res.status(201).json(artist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
