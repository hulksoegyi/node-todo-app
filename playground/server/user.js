var { mongoose } = require('./db/mongoose.js');
var { User } = require('./models/user.js');

var newUser = new User({
    Name: `MYINT THET MON`,
    Email: `cutefaiy.thetmon@gmail.com`,
    Password: `12345`,
    Location: `Singapore`,
    CreatedAt: new Date().toUTCString(),
});

newUser.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
    console.log(`Cannot save into DB because of error - ${e}`);
});