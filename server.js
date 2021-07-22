const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contactUs.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'protonmail',
        auth: {
            user: 'hiddenwaters@protonmail.com',
            pass: 'uZJW@Cb@%xy+#2R'
        }
        
    })
    const mailOptions = {
        from: req.body.email,
        to: 'hiddenwaters@protonmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email Sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})