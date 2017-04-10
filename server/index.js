const express = require('express');
const request = require('request');
const cors = require('cors')
const readlineSync = require('readline-sync');

const port = process.env.PORT || 3001;
const username = readlineSync.question('Jira username:');
const password = readlineSync.question('Jira password:', {
  hideEchoBack: true
});
console.log('Thank you. Server is now listening on port ' + port);

const app = express();
app.use(cors());
app.use('/', function(req, res) {
  const url = 'https://jira.amazeelabs.com' + req.url;

  const authData = {
    auth: {
      username: username,
      password: password
    }
  };

  req.pipe(request(url, authData)).pipe(res);
});

app.listen(port);
