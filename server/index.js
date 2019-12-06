const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();

const port = 4200;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')))

app.get('/robots', (req, res) => {
  // TODO - your code here!

});

// TODO - add additional route handlers as necessary

app.listen(port, () => {
  console.log('listening on 4200');
});
