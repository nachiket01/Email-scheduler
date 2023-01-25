const express = require('express');
const app = express();
const scheduler = require('node-cron');
const { transporter,options } = require('./services/email');

const PORT = 1337
 
scheduler.schedule("* * * * * *", ()=>{
  console.log('sending Emails');
  transporter.sendMail(options, (err,info) =>{
    if(err){
      console.log(err);
    }
    console.log('Email send with info = ', info);
  })
})

app.listen(PORT, ()=>{
  console.log("server is running st port ", PORT);
});
