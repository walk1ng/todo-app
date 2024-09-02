const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log('Server is running on port', port);
})

const indexRouter = require('./routes/index');

app.use('/', indexRouter);


module.exports = app;