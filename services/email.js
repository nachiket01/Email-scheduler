const nodemail = require('nodemailer');

const SMTP_PORT= 587;
const USER_EMAIL = "";

const USER_PASSWORD = "";
const HOST_SERVICE = "smtp-relay.sendinblue.com";

const SENDER_EMAIL = USER_EMAIL;
const RECIVER_EMAIL = "";

const CC = [];
const BCC = [];


const EMAIL_SUBJECT = "Happy birthday";
const EMAIL_BODY_HTML = "<h1>Happy Birthday</h1>"

const options = {
  from: SENDER_EMAIL,
  to: RECIVER_EMAIL,
  cc: CC,
  bb:BCC,
  subject: EMAIL_SUBJECT,
  html: EMAIL_BODY_HTML
};

const transporter = nodemail.createTransport({
  host: HOST_SERVICE,
  port: SMTP_PORT,
  secure: false,
  auth:{
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  }
});


module.exports = {transporter, options }