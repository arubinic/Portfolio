const express = require('express'),
http    = require('http'),
path    = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/Portfolio')));

app.get('*', (req,res) => {
res.sendFile(path.join(__dirname, 'dist/Portfolio/index.html'));
})

const port = process.env.PORT || '21098';
app.set('port', port);

const server = http.createServer(app);
server.listen(port,() => console.log('Running at port '+port))