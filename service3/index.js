const axios = require('axios');
var express = require('express');
var app = express();

const PORT = process.env.PORT
const TEXT = process.env.TEXT;
const NODE1_URL= process.env.NODE1_URL;
const NODE2_URL= process.env.NODE2_URL;
const NODE3_URL= process.env.NODE3_URL;

app.get('/test3', function (req, res) {
  res.send(`listening on Port: ${PORT} \n${TEXT}`);
});


app.get('/test1', function (req, res) {
  axios.get(`${NODE1_URL}/test1`) 
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    console.error(error);
  });
});



app.get('/test2', function (req, res) {
  axios.get(`${NODE2_URL}/test2`)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    console.error(error);
  });
});



app.listen(PORT, function () {
  console.log(`You are listening on port ${PORT}, given text - ${TEXT}` );
});