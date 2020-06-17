const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./controllers/authController')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(9000);
