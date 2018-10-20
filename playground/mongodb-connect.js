// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: "SOE NAING HTET", age: 28};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log(`Unable to connect to MongoDB Server`);
    }
    console.log(`Connected to MongoDB Server`);
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: "Eat Lunch",
    //     completed: false,
    // }, (err, result) => {
    //     if(err){
    //         return console.log(`Unable to insert to do`, err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "NANDAR AUNG THAN",
    //     age: 28,
    //     location: "YANGON",
    // }, (err, result) => {
    //     if(err){
    //         return console.log(`Unable to insert`, err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});