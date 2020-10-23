const router = require('express').Router();

const apiExchangeRates = require('./api/exchangeRates');
router.use('/er', apiExchangeRates);

module.exports = router;