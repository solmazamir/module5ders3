// Expressin tapsirigi
const express = require('express');
const app = express();
const arr= [{id:"1",name:"Hasan",age:"20"},{id:"2",name:"Nurlan",age:"20"},{id:"1",name:"ALi",age:"20"}]

app.get('/get', function (req, res) {
  res.send(arr);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); /*  */
