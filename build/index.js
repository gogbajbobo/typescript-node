"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes/routes");
const greeter_1 = require("./greeter");
console.log(greeter_1.Greeter('test'));
greeter_1.ConsoleLogText('tttttest!');
const app = express();
app.use(routes_1.router);
app.listen(9999, () => {
    console.log('API server start on port:', 9999);
});
//# sourceMappingURL=index.js.map