const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const Handlebars = require("handlebars");


const templatePath = path.join(__dirname, 'template.html');
const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

var template = Handlebars.compile(htmlTemplate);



var data = { "recipent":"Apurba", "username": "Pallav", "mobileNo" : "+61416283705" , "company" : "ksolutions", "email":"sales@k-solutions.dev"};

var result = template(data);

console.log('result'  + result);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "dbdbs6864@gmail.com",
      pass: "----------------------"
    }
  });
  

  const mailOptions = {
    from: 'sales@k-solutions.dev',
    to: ['abiswas.81@gmail.com', "pallav01@gmail.com"],
    subject: 'Welcome to Our WebSite',
    html: result
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
  
