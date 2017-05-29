const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const notificationsArr = [
  {
    'type': 'Security Alert',
    'description': 'Person(s) reported checking for unlocked cars in main student parking lot.',
    'date': new Date()
  },
  {
    'type': 'Undergraduate Change',
    'description': 'The application to the Registrar’s Office for changing from your major has been approved.',
    'date': new Date()
  },
  {
    'type': 'Low Balance Alert',
    'description': 'Your JayBucks account is very low. You may want to add funds to this account soon.',
    'date': new Date()
  }
];
let clients;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/notifications', (req, res) => {
  res.send(notificationsArr);
});

app.post('/newnotifications', (req, res) => {
  notificationsArr.unshift({
    'type': 'Message from the Dean',
    'description': `I am very pleased to announce that ${req.body.newNotification}`,
    'date': new Date() 
  });
  clients.emit('messages', req.body.newNotification);
  res.send({
    'type': 'Message from the Dean',
    'description': `I am very pleased to announce that ${req.body.newNotification}`,
    'date': new Date() 
  });
});
io.on('connection', (client) => {
  console.log('Client connected...');
  clients = client;
  client.on('join', (data) => {
    console.log(data);
  });
  client.emit('messages', 'Hello from server');
});

server.listen(8081);