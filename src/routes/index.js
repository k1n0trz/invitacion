const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/confirmar-asistencia', (req, res) => {
    res.render('layouts/confirmar-asistencia');
});

router.get('/confirmados', async (req, res) => {
    const guess = await pool.query('SELECT * FROM guess');
    res.render('./layouts/confirmados', { guess });
});

module.exports = router;