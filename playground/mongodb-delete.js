const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(`Unable to connect to MongoDB Server`);
    }
    console.log(`Connected to MongoDB Server`);
        
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Users').deleteMany({
    //     name: 'NANDAR AUNG THAN',
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    db.collection('Users').deleteOne({
        _id: new ObjectID('5bca9425d56c1c30c8ed3151')
    }).then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({
    //     name: 'MIN THU HEIN'
    // }).then((res)=>{
    //     console.log(res);
    // });

    client.close();

});