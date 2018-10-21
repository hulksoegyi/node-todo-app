var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
      text: req.body.text  
    })

    todo.save().then((doc)=>{
        res.status(200).send(doc);
    }, (e)=>{
        res.status(400).send(`Can't save that data due to error : ${e}`);
    });
});

// Get /todos/123213123


app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
});
