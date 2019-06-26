const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;


const mongoose = require('mongoose');

let Todo = require('./todo.model');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser : true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("Mongodb connection established");
});

app.listen(PORT, function(){  
    console.log("Server started on 4000");
});