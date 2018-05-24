"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes/routes");
const greeter_1 = require("./greeter");
const path_1 = __importDefault(require("path"));
console.log(greeter_1.Greeter('test'));
greeter_1.ConsoleLogText('ttttest!');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.use(express.static(path_1.default.join(__dirname, '../public')));
app.use(routes_1.router);
app.listen(9999, () => {
    console.log('API server start on port:', 9999);
});
