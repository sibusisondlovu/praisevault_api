const { Revival } = require('../models');

exports.getAllRevivals = async (req, res) => {
    try {
        const revivals = await Revival.findAll();
        res.json(revivals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRevival = async (req, res) => {
    try {
        const revival = await Revival.create(req.body);
        res.status(201).json(revival);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getRevivalById = async (req, res) => {
    try {
        const revival = await Revival.findByPk(req.params.id);
        if (!revival) return res.status(404).json({ message: 'Revival not found' });
        res.json(revival);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRevival = async (req, res) => {
    try {
        const revival = await Revival.findByPk(req.params.id);
        if (!revival) return res.status(404).json({ message: 'Revival not found' });
        await revival.update(req.body);
        res.json(revival);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRevival = async (req, res) => {
    try {
        const revival = await Revival.findByPk(req.params.id);
        if (!revival) return res.status(404).json({ message: 'Revival not found' });
        await revival.destroy();
        res.json({ message: 'Revival deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
