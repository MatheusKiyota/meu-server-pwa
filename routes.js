const express = require('express');
const router = express(); 


router.get('/about', (req, res) => {
    res.send('Página sobre');
});

router.get('/services', (req, res) => {
    res.send('Página de serviços');
});

modeule.exports = server