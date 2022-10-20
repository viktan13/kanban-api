const express = require('express');
const routes = require('./routes');
const parseResponse = require('./bodyParser');

const app = express();
const PORT = process.env.PORT || 5000;

parseResponse(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
