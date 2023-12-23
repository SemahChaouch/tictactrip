import express from 'express';
const redis = require('redis');
const cors = require('cors');
import bodyParser from 'body-parser';
const test = true
const app = express();
const port = 3000;
const Client = redis.createClient({ socket: { host: '127.0.0.1', port: '6379' } });
Client.connect();

Client.on('error', (err: Error) => {
    console.log('Error ' + err);
});

Client.on('connect', () => {
    console.log('Redis connected');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( bodyParser.text() );
app.use(cors());
app.use('/', require('./src/routes'));
if (!test) {
app.listen(port, () => {
    console.log( `server running on port ${port}` );})};

module.exports = { Client, app };
export default Client;