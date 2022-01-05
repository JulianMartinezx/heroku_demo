const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('Servidor en linea, en el puerto ' + app.get('port'));
});