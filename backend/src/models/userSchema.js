const mongoose = require('../database/index');

const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    usuario: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    identific: {
        type: String,
        required: true,
    },
    address: {
        type: Object,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//aqui fazemos a encriptação da senha
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;