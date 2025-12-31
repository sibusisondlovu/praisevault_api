const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const upload = require('../middleware/upload');

router.get('/', albumController.getAllAlbums);
// Only cover image is uploaded for album
router.post('/', upload.fields([{ name: 'cover', maxCount: 1 }]), albumController.createAlbum);

module.exports = router;
