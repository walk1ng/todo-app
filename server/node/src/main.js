const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log('Server is running on port', port);
})

const data = [
    {
        "text": "吃饭",
        "done": false
    },
    {
        "text": "睡觉",
        "done": false
    },
    {
        "text": "打豆豆",
        "done": true
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/todos', (req, res) => {
    res.send(data);
})