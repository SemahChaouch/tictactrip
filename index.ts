import express from 'express';
const redis = require('redis');
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const Client = redis.createClient();
Client.connect();

Client.on('error', (err: Error) => {
    console.log('Error ' + err);
});

Client.on('connect', () => {
    console.log('Redis client connected');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./src/routes'));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


export default Client;