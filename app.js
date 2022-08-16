const express = require('express');

const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_latihan_node_js_1'
});

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Completly Connected!');
  }
})

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.listen(3000);