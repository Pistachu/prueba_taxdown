const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(process.env.API_URL);
        res.send(response.data);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;