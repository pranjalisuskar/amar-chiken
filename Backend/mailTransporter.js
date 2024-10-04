const nodemailer = require('nodemailer');
const config = require('./db/config');

// Set up nodemailer transporter
module.exports = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASS,
    },
});