const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('hello!!')
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})