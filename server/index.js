const express = require('express'),
    path = require('path'),
    config = require('./config');

const api = require('./routes/api');
   
const app = express();
const PORT = parseInt(config.ServerPort);

if (!Number.isInteger(PORT)) {
    console.error('Bad port, please set PORT as anv variable');
    process.abort();
}

app.listen(PORT, () => console.log('Server started at port:', PORT));

app.use('/static', express.static('public'));
app.use('/api/v1', api);
app.use(express.static(path.join(__dirname + '/../dist/')));
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.use((err, req, res) => {
    console.error(err.stack);
    return res.status(500).end(`Internal srever error: ${err.message}`);
});
