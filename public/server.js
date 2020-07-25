// const express = require('express')
// const app = express()
// var http = require('http').createServer(app);
// var io = require('socket.io').socket.listen(http);


var socket = require('socket.io');
var express = require('express'), http = require('http');
var app = express();
const signalRepository =require('../repositories/signalrepository.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const port =process.env.PORT|| 3000;
var server = http.createServer(app).listen(port, function(){
    console.log("Express server listening on port " + port);
  });

  var io = socket.listen(server);
io.sockets.on('connection', function () {
    console.log('hello world im a hot socket');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/signal/create',(req,res)=>{
    const signalBody={ 
        signalName: req.body.signalName, 
        paid:req.body.paid,
        trade_id:req.body.trade_id,
        prediction:req.body.prediction 
    };
    //console.log(signalBody);
    signalRepository.storeSignal(signalBody).then((signal)=>{
        io.emit('on-new-signal', JSON.stringify(signal));
        res.send('signal created successfully');
        
    });
});

app.get('/signal',(req,res)=>{
    signalRepository.getAllSignals().then((signals)=>{
        res.json(signals);
    });
});

app.get('/signal/free',(req,res)=>{
    
    signalRepository.getFreeSignals().then((signals) =>{
        res.json(signals);
    });
});

// const port =process.env.PORT|| 3000;
// http.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));







