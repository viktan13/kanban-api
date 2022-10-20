const express = require('express');
const routes = require('./routes');
const parseResponse = require('./bodyParser');
const dbConnect = require('./dbConnect');

const app = express();
const PORT = process.env.PORT || 5000;

dbConnect();
parseResponse(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

//mongodb+srv://admin:K72Wsv9cnQ8dCTHA@cluster0.umvyr8v.mongodb.net/kanban?retryWrites=true&w=majority
