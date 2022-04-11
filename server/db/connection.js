const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false
}).then(()=>{
    console.log('Database Connection Successfull!')
}).catch((err)=>{
    console.log('DB Failed!')
});