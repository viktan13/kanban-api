const mongoose = require('mongoose');

const connectionString =
    'mongodb+srv://admin:K72Wsv9cnQ8dCTHA@cluster0.umvyr8v.mongodb.net/kanban?retryWrites=true&w=majority';
const options = {};

function dbConnection() {
    mongoose
        .connect(connectionString, options)
        .then(() => console.log('Mongo connection done!'))
        .catch((err) => console.log(err));
}

module.exports = dbConnection;
