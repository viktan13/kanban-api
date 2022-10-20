let cards = [
    { id: '1', name: 'First Card', status: 'todo', priority: 2 },
    { id: '2', name: 'Second Card', status: 'progress', priority: 5 },
    { id: '3', name: 'Third Card', status: 'review', priority: 10 },
];

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/card', (req, res) => {
        res.send(cards);
    });

    app.post('/card', (req, res) => {
        const newCard = req.body;
        cards.push({ id: Math.random().toString(), ...newCard });
        res.send('Card created succesfully');
    });

    app.patch('/card/:cardId', (req, res) => {
        const cardID = req.params.cardId;
        const cardUpdate = req.body;
        cards = cards.map((el) =>
            el.id === cardID ? { id: el.id, ...cardUpdate } : el,
        );

        res.send('Card updated successfully.');
    });

    app.delete('/card/:cardId', (req, res) => {
        const cardID = req.params.cardId;
        cards = cards.filter((el) => el.id !== cardID);
        res.send(cards);
    });
}

module.exports = routes;
