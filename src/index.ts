import express = require('express')
import { router } from './routes/routes'
import { Greeter, ConsoleLogText } from "./greeter"
import path from 'path'

console.log(Greeter('test'));

ConsoleLogText('ttttest!');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

app.use(router);

app.listen(9999, () => {
    console.log('API server start on port:', 9999);
});
