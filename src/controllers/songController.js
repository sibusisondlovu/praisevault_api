const { Song, Album, Artist } = require('../models');

exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll({
            include: [{
                model: Album,
                include: [Artist]
            }]
        });
        // Flatten structure for frontend compatibility if needed, or update frontend
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createSong = async (req, res) => {
    try {
        const { title, duration, genre, AlbumId } = req.body;

        let url = '';

        if (req.files && req.files.audio) {
            url = `/uploads/songs/${req.files.audio[0].filename}`;
        }

        const song = await Song.create({
            title,
            duration: duration || '0:00',
            genre,
            AlbumId,
            url
        });

        res.status(201).json(song);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        await song.update(req.body);
        res.json(song);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSong = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        await song.destroy();
        res.json({ message: 'Song deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
