const router = require('express').Router();

const apiExchangeRates = require('./api/exchangeRates');
router.use('/exchangeRates', apiExchangeRates);

module.exports = router;