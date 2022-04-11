const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        trim: true,

    },
    separate_area: {
        type: String,
        trim: true,

    },
    court: {
        type: String,
        trim: true,

    },
    experience: {
        type: Number,

    },
    language: {
        type: String,
        trim: true,

    },
    gender: {
        type: String,
        trim: true,

    },
    img:
    {
        type: String,

    },
    role:
    {
        type: String,
        required: true,
    },
    work:
    {
        type: String,
    },
    address:
    {
        type: String,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]

});


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next()
});

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;
