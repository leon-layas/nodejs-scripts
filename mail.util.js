const nodemailer = require('nodemailer');
const log = require('./log.util');

const EMAIL_ADDRESS = 'user-accounts@light-code.co.uk';
const EMAIL_PASSWORD = 'J1k2L3!!';

const sendMail = (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'smtp',
        host: 'smtpout.secureserver.net',
        port: 465,
        secure: true,
        auth: {
            // Update your email account here
            user: EMAIL_ADDRESS,
            pass: EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    const mailOptions = {
        from: EMAIL_ADDRESS,
        to,
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    };

    log(`To ${to}:`, subject, text);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            log('Sent emailfailed: ', error);
        } else {
            log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendMail,
};
