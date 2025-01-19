const axios = require('axios');
var express = require('express');
var app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const TEXT = process.env.TEXT || "This is node 1";
const NODE1_URL= process.env.NODE1_URL || "container1:3001" ;
const NODE2_URL= process.env.NODE2_URL || "container2:3002" ;;
const NODE3_URL= process.env.NODE3_URL || "container3:3003" ;;

app.use(cors()); 
app.get('/test1', function (req, res) {
  res.send(`listening on Port: ${PORT}  ||  ${TEXT}`);
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



app.get('/test3', function (req, res) {
  axios.get(`${NODE3_URL}/test3`)
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
