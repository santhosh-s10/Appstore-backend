const express = require('express');
const { getImage } = require('../controllers/appStoreController');
const router = express.Router();

router.get('/', getImage);

module.exports = router;