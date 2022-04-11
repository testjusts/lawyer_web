const express = require('express');
const app = express();
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000;
const path = require('path')
const morgan = require('morgan')

const bodyParser = require("body-parser")
// const cookieParser = require("cookie-parser")
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoded' })


const cors = require('cors')
dotenv.config({ path: './.env' });
require('./db/connection')

app.use(express.json());
app.use(require('./router/router'));

app.use(cors());
// app.use(bodyParser.json());
app.use(jsonParser);
app.use(urlencodedParser);
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use("/images", express.static(path.join(__dirname, '/images')));


//middleware
// const middleware = (req, res, next)=>{
// console.log('Hello I am middleware')
// next();
// }
//middleware();

// app.get('/', (req,res)=>{
//     res.send('Hi Pragya!')
// });
// app.get('/about', middleware, (req,res)=>{
//     console.log('Hello fro about page for test')
//     res.send('Hi from About Page')
// });
// app.get('/register', (req,res)=>{
//     res.send('Hi from register page')
// });
// app.get('/login', (req,res)=>{
//     res.send('Hi from login page')
// });

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"));
//     const path = require("path");
//     app.get('*', (req, res)=>{
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }


app.listen(PORT, () => {
    console.log(`Server Is running at PORT ${PORT}`)
})