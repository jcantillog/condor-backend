var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', async function(req, res, next) {
    try {
        const limitQueryParam = req.query.limit ? `&limit=${req.query.limit}` : '';
        const offsetQueryParam = req.query.offset
            ? `&offset=${req.query.offset}`
            : '';
        console.log('OFFSET Q P: ', offsetQueryParam);
        const nameQueryParam = req.query.name ? `&name=${req.query.name}` : '';
        const url = `https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider${nameQueryParam}${limitQueryParam}${offsetQueryParam}`;
        console.log('URL: ', url);
        const result = await axios.get(url);

        res.send(result.data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;