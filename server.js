const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('express-favicon');
const fetch = require("node-fetch");
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3030;

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
app.use(cors()); //({credentials: true, origin: true})

app.use(favicon(__dirname + '/build/favicon.png'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//простой тест сервера
app.get('/ping', function (req, res) {
    return res.send('pong');

});

//обслуживание html
app.get('/*', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function is_numeric(str) {
    return /^\d+$/.test(str);
}

app.listen(port);

console.log("Server is running");
console.log("Listening on port: " + port);
console.log("For exit press CTRL+C");