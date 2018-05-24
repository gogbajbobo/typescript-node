import express = require('express')
import { router } from './routes/routes'
import { Greeter, ConsoleLogText } from "./greeter"

console.log(Greeter('test'));

ConsoleLogText('ttttest!');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(router);

app.listen(9999, () => {
    console.log('API server start on port:', 9999);
});
