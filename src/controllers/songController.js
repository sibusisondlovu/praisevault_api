const { Song } = require('../models');

exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createSong = async (req, res) => {
    try {
        const { title, artist, duration } = req.body;

        let url = '';
        let coverUrl = '';

        if (req.files) {
            if (req.files.audio) {
                // Assuming the server is reachable via the same host, we construct a relative or absolute URL.
                // For simplicity in this demo, we'll store the relative path.
                // In production, you might want full URLs or CDN links.
                url = `/uploads/songs/${req.files.audio[0].filename}`;
            }
            if (req.files.cover) {
                coverUrl = `/uploads/covers/${req.files.cover[0].filename}`;
            }
        }

        const song = await Song.create({
            title,
            artist,
            duration,
            url,
            coverUrl
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
