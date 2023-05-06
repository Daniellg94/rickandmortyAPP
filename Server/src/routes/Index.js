const { getCharById } = require("../controllers/getCharById");
const postFav = require('../controllers/postFav')
const deleteFav = require ('../controllers/deleteFav')
const express = require('express');
const router = express.Router();
const postUser = require('../controllers/postUser.js')
const login = require ('../controllers/login.js')

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});

router.post('/login/register', postUser);

router.get('/login', login);

router.post('/fav',postFav);

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
});

module.exports = router;