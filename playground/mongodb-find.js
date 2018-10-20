const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log(`Unable to connect to MongoDB Server`);
    }
    console.log(`Connected to MongoDB Server`);
    const db = client.db('TodoApp')

    // db.collection('Todos')
    //     .find({
    //         completed: false
    //     })
    //     .count()
    //     .then((count) =>{
    //         console.log(`Todos count : ${count}`);
    //     }, (err) => {
    //         console.log(`Unable to fetch todos. ${err}`);
    //     });

    // db.collection('Todos')
    //     .find({
    //         //_id: "5bc8a73c7f4be73963e3c583",
    //         _id: new ObjectID("5bc8a27e9400930b70e5778b")
    //         })
    //     .toArray()
    //     .then((doc)=>{
    //         console.log('Todos');
    //         console.log(JSON.stringify(doc, undefined, 2));
    // }, (err) => {
    //     console.log(`Unable to fetch todos. ${err}`)
    // });

    db.collection('Users').find({
        name: { '$ne': 'SOE NAING HTET' },
    })
    .toArray().then((docs) => {
        console.log(`Total Users : ${docs.length}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(`Unable to fetch users. ${err}`);
    });

    client.close();
});