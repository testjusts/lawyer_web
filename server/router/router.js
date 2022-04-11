const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer');
// const fs = require('fs');
const path = require('path')
const authenticate = require("../middleware/authenticate")
const cookieParser = require("cookie-parser")
const nodemailer = require('nodemailer');

require('../db/connection');
const User = require('../model/userSchema');
// const Upload = require('../model/imageSchema');
// const Data = require('../model/dataSchema')

// router.use(function(req, res, next) {
//     if (!req.rootUser)
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//     next();
// });
router.use(cookieParser());

const storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter });

// router.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tm3720304@gmail.com',
        pass: 'tesT@123'
    }
})



// //Registration Image Upload:
// router.post('/', upload.single('file'), async (req, res) => {
//     console.log(req.file)
//     if (!req.file) {
//       console.log("No file received");
//       return res.send({
//         success: false
//       });
//     } else {
//     const newImage = new Upload({
//         img:req.file.originalname
//     })
//     await newImage.save()
//       console.log('file received');
//       return res.send({
//         success: true
//       })
//     }
//   });


router.post('/signup', upload.single('img'), async (req, res) => {
    const { name, phone, email, password, cpassword, role } = req.body;
    // const img = req.file.path;
    console.log(req.body)
    if (!name || !email || !phone || !password || !cpassword || !role) {
        return res.status(422).json({ error: 'Please Fill all the field Properly! Bhai' })
    }
    try {
        const userExit = await User.findOne({ email: email });
        if (userExit) {
            return res.status(422).json({ error: "Email Already Exit bhai!" })
        }
        const user = new User({ name: req.body.name, phone: req.body.phone, email: req.body.email, password: req.body.password, cpassword: req.body.cpassword, role: req.body.role, img: req.file.path });
        // console.log(user)
        await user.save();
        res.status(201).json({ message: 'Registration Successful!' })
    } catch (err) {
        console.log(err)
    }
    // console.log(req.body)
    // res.json({message:req.body})
})


//For Reference:
// router.post('/lawyers', upload.single('img'), async (req, res) => {
//     const { name, phone, email, password, cpassword, city, separate_area, court, experience, gender, language, rating} = req.body;
//     // const img = req.file.path;
//     // console.log(req.file)
//     if (!name || !email || !phone || !password || !cpassword || !city || !separate_area || !court || !experience || !gender || !language || !rating ) {
//         return res.status(422).json({ error: 'Please Fill all the field Properly! Bhai' })
//     }
//     try {
//         const userExit = await User.findOne({ email: email });
//         if (userExit) {
//             return res.status(422).json({ error: "Email Already Exit bhai!" })
//         }
//         const user = new User({ name:req.body.name, phone:req.body.phone, email:req.body.email, password:req.body.password, cpassword:req.body.cpassword, city:req.body.city, separate_area:req.body.separate_area, court:req.body.court, experience:req.body.experience, gender:req.body.gender, language:req.body.language, rating:req.body.rating, img:req.file.path });
//         console.log(user)
//         await user.save();
//         res.status(201).json({ message: 'Registration Successful!' })
//     } catch (err) {
//         console.log(err)
//     }
//     // console.log(req.body)
//     // res.json({message:req.body})
// })


router.post('/login', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill all the fields!" })
        }
        const userLogin = await User.findOne({ email: email, name:name});

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 180000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(422).json({ error: "Invalid Password" });

            } else {
                res.status(201).json({ message: "login Successful!" })
                const mailOptions = {
                    from: '"Verify your Email" <tm3720304@gmail.com>',
                    to: userLogin.email,
                    subject: 'Verify Your Email',
                    html: `<h2>${userLogin.name}! Thanks for registering on our site</h2>
                    <h4>Please verify your Email to Continue...</h4>
                    <a href="http://${req.headers.host}/verify-email">Click here to Verify Your Email</a>`
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                })
            }
        } else {
            res.status(422).json({ error: "Invalid Credientials" });
        }
    } catch (err) {
        console.log(err)
    }
})

router.get('/verify-email', authenticate, async (req, res) => {
    try {
        if (req.token) {
            res.send("Email is Verified now!")
            console.log('Email is Verified now')
        }
        else {
            console.log('Email not Verified')
        }
    } catch (err) {
        console.log(err)
    }
})


router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' })
    res.status(201).send('User Logout')
    res.end()
    console.log(res.rootUser, "nahi hai rootUser")
})

// router.post('/lawyers', async (req, res) => {
//     try {
//         const data = new Data(req.body);
//         console.log(data)
//         await data.save();
//         res.status(201).json({ message: 'Adding Api data Successful' })

//     } catch (err) {
//         res.status(400).send(err)
//         console.log(err)

//     }
// })


router.get('/signup', async (req, res) => {
    try {
        const getApiData = await User.find({})
        res.send(getApiData)
        // console.log(getApiData, "dgdgdgdgdg")

    } catch (err) {
        res.status(500).send(err)

    }
})

// get individual api data:
router.get('/signup/:id', authenticate, async (req, res) => {
    try {
        const _id = req.params.id;
        const getApiData = await User.findById(_id)
        res.send(req.rootUser)
        // res.send(getApiData);
        // console.log(getApiData)

    } catch (err) {
        res.status(500).send(err)

    }
})

router.get('/data', authenticate, async (req, res) => {
    try {
        res.send(req.userId)
        console.log("============", req.userId)

    } catch (err) {
        res.status(500).send(err)

    }
})

//patch:Update Data
router.put('/signup/:id', authenticate, async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(12);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        req.body.cpassword = await bcrypt.hash(req.body.cpassword, salt);
    }
    try {
        const _id = req.params.id;
        const getApiData = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(getApiData)
        console.log(getApiData)

    } catch (err) {
        res.status(500).send(err)

    }
})

//UPDATE
// router.put("/signup/:id", async (req, res) => {
//     if (req.body.userId === req.params.id) {
//       if (req.body.password) {
//         const salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(req.body.password, salt);
//       }
//       try {
//         const updatedUser = await User.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedUser);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can update only your account!");
//     }
//   });


// //delete:
// router.delete('/lawyers/:id', async (req, res)=>{
//     try{
//         const _id = req.params.id;
//         const getApiData = await Data.findByIdAndDelete(_id)
//         res.send(getApiData)

//     }catch(err){
//         res.status(500).send(err)

//     }
// })



module.exports = router