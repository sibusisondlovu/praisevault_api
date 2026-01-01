const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');
const upload = require('../middleware/upload');

router.get('/', songController.getAllSongs);
// Handle file uploads: 'audio' and 'cover' fields
router.post('/', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), songController.createSong);
router.get('/:id', songController.getSongById);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.deleteSong);

module.exports = router;
