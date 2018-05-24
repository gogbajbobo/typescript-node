"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
router.route('/')
    .get((req, res) => res.status(200).json({ error: false, message: 'OK!', uri: process.env.SCRIPT_URI || 'localhost' }));
//# sourceMappingURL=routes.js.map