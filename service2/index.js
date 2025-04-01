var axios = require('axios');
var express = require('express');
var app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3002;
const TEXT = process.env.TEXT || "This is node 2";
const NODE1_URL= process.env.NODE1_URL || "localhost:3001/test1" ;
const NODE2_URL= process.env.NODE2_URL || "localhost:3002/test2" ;
const NODE3_URL= process.env.NODE3_URL || "localhost:3003/test3" ;

app.use(cors()); 
app.get('/test2', function (req, res) {
  res.send(`listening on Port: ${PORT}  ||  ${TEXT}`);
});


// app.get('/test1', function (req, res) {
//   axios.get("3.85.241.165:3001/test1/test1") 
//   .then(response => {
//     res.send(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// });



app.get('/test1', async (req, res) => {
  try {
      // Make a GET request to localhost:3002
      const response = await axios.get(`http://${NODE1_URL}`);
      // Send the response from the external API to the client
      res.json({
          message: 'Data fetched from localhost:3001',
          data: response.data,
      });
  } catch (error) {
      console.error('Error making request to localhost:3001:', error.message);
      // Handle errors and respond with an error message
      res.status(500).json({
          message: 'Failed to fetch data from localhost:3001',
          error: error.message,
      });
  }
});


app.get('/test3', async (req, res) => {
    try {
        // Make a GET request to localhost:3002
        const response = await axios.get(`http://${NODE3_URL}`);
        // Send the response from the external API to the client
        res.json({
            message: 'Data fetched from localhost:3003',
            data: response.data,
        });
    } catch (error) {
        console.error('Error making request to localhost:3003:', error.message);
        // Handle errors and respond with an error message
        res.status(500).json({
            message: 'Failed to fetch data from localhost:3003',
            error: error.message,
        });
    }
});



// app.get('/test3', function (req, res) {
//   axios.get("3.85.241.165:3003/test3/test3")
//   .then(response => {
//     res.send(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// });


app.listen(PORT, function () {
  console.log("You are listening on port ${PORT}, given text - ${TEXT}" );
});
