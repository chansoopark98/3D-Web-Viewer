let express = require('express');
let app = express();
let cors = require('cors');

let fs = require('fs');
let options = {
    key: fs.readFileSync('./web/ssl/_wildcard_.tsp-xr.com_2022112348E91.key.pem'),
    cert: fs.readFileSync('./web/ssl/_wildcard_.tsp-xr.com_2022112348E91.crt.pem'),
    requestCert: false,
    rejectUnauthorized: false
};
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cors());
 
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/sample_models', express.static(__dirname + '/sample_models'));
let server_port = 5555;
let server = require('https').createServer(options, app);

app.get('/', (req, res) => {
    res.render(__dirname + "/mainPage.html");    // index.ejs을 사용자에게 전달
    console.log(__dirname);
})

server.listen(server_port, function() {
  console.log( 'Express server listening on port ' + server.address().port );
});