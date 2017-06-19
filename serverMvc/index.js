const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const log4js = require('log4js');

log4js.configure('./config/log4js.json');
const fs = require('fs');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));

const notificationsArr = [
  {
    'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
    'publisherid': 'PK',
    'netid': '7d5872b5b9',
    'title': 'Security Alert',
    'message': 'Person(s) reported checking for unlocked cars in main student parking lot.',
    'dismissed': false,
    'created': '2017-06-06T19:54:41.489Z'
  },
  {
    'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
    'publisherid': 'PK',
    'netid': '7d5872b5b9',
    'title': 'Undergraduate Change',
    'message': 'The application to the Registrar’s Office for changing from your major has been approved.',
    'dismissed': false,
    'created': '2017-06-06T19:54:41.489Z'
  },
  {
    'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
    'publisherid': 'PK',
    'netid': '7d5872b5b9',
    'title': 'Low Balance Alert',
    'message': 'Your JayBucks account is very low. You may want to add funds to this account soon.',
    'dismissed': false,
    'created': '2017-06-06T19:54:41.489Z'
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
  notificationsArr.unshift(
    {
      'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
      'publisherid': 'PK',
      'netid': '7d5872b5b9',
      'title': 'Message from the Dean',
      'message': `I am very pleased to announce that ${req.body.newNotification}`,
      'dismissed': false,
      'created': '2017-06-06T19:54:41.489Z'
    }
);
  clients.emit('messages', req.body.newNotification);
  res.send({
    'notificationid': 'e6f1bfe2-f766-4653-b588-238d3eece2b3',
    'publisherid': 'PK',
    'netid': '7d5872b5b9',
    'title': 'Message from the Dean',
    'message': `I am very pleased to announce that ${req.body.newNotification}`,
    'dismissed': false,
    'created': '2017-06-06T19:54:41.489Z'
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

app.post('/uilog', (req) => {
  const log = log4js.getLogger(req.body.logType);
  if (req.body.type === 'info') {
    log.info(req.body.datas);
  }
  if (req.body.type === 'warn') {
    log.warn(req.body.datas);
  }
  if (req.body.type === 'error') {
    log.error(req.body.datas);
  }
});

server.listen(8081, () => {
  const log = log4js.getLogger('app');
  log.info('Express server listening on port ', server.address().port, ' with pid ', process.pid);
});