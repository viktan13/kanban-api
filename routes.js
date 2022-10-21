const cardCreate = require('./cards/cardCreate');
const cardGetAll = require('./cards/cardGetAll');
const cardUpdateByID = require('./cards/cardUpdateByID');
const cardDelete = require('./cards/cardDelete');

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/card', cardGetAll);

    app.post('/card', cardCreate);

    app.patch('/card/:cardId', cardUpdateByID);

    app.delete('/card/:cardId', cardDelete);
}

module.exports = routes;
