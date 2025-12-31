const { Album, Artist } = require('../models');

exports.getAllAlbums = async (req, res) => {
    try {
        const { artistId } = req.query;
        let whereClause = {};
        if (artistId) {
            whereClause = { ArtistId: artistId };
        }

        const albums = await Album.findAll({
            where: whereClause,
            include: [Artist]
        });
        res.json(albums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAlbum = async (req, res) => {
    try {
        const { title, ArtistId } = req.body;
        let coverUrl = '';
        if (req.files && req.files.cover) {
            coverUrl = `/uploads/covers/${req.files.cover[0].filename}`;
        }

        const album = await Album.create({
            title,
            ArtistId,
            coverUrl
        });
        res.status(201).json(album);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
