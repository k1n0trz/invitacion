const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/confirmar-asistencia', (req, res) => {
    res.render('layouts/confirmar-asistencia');
});

module.exports = router;