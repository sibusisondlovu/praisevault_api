const { Branch } = require('../models');

exports.getAllBranches = async (req, res) => {
    try {
        const branches = await Branch.findAll();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createBranch = async (req, res) => {
    try {
        const branch = await Branch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getBranchById = async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });
        res.json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBranch = async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });
        await branch.update(req.body);
        res.json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteBranch = async (req, res) => {
    try {
        const branch = await Branch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });
        await branch.destroy();
        res.json({ message: 'Branch deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
