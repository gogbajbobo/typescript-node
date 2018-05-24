"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
router.route('/')
    .get((req, res) => {
    const jsonData = {
        error: false,
        message: 'OK!',
        uri: process.env.SCRIPT_URI || 'localhost'
    };
    res.status(200).json(jsonData);
});
router.route('/test')
    .get((req, res) => {
    const renderData = {
        uri: process.env.SCRIPT_URI || 'localhost'
    };
    res.render('index', renderData, (err, content) => {
        err ? res.json({ err: err.message }) : res.send(content);
    });
});
