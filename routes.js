const cardCreate = require('./cards/cardCreate');
const cardGetAll = require('./cards/cardGetAll');
const cardUpdateByID = require('./cards/cardUpdateByID');
const cardDelete = require('./cards/cardDelete');
let cards = [
    { id: '1', name: 'First Card', status: 'todo', priority: 2 },
    { id: '2', name: 'Second Card', status: 'progress', priority: 5 },
    { id: '3', name: 'Third Card', status: 'review', priority: 10 },
];

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
