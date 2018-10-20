const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(`Unable to connect to MongoDB Server`);
    }
    console.log(`Connected to MongoDB Server`);

    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bca93e4b6bed70f7cfd81e0')
    // },{
    //     $set:{ completed: false }
    // },{
    //     returnOriginal: true
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        // name: 'SOE NAING HTET'
        _id: new ObjectID('5bca940ca64da40910913231')
    },{
        $set: { name: 'SOE NAING HTET' },
        $inc: { age: -1}
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    client.close();

});