const express = require('express');
const router = express.Router();
const revivalController = require('../controllers/revivalController');

router.get('/', revivalController.getAllRevivals);
router.post('/', revivalController.createRevival);
router.get('/:id', revivalController.getRevivalById);
router.put('/:id', revivalController.updateRevival);
router.delete('/:id', revivalController.deleteRevival);

module.exports = router;
