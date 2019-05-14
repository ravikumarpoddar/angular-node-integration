const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/post');

app.use(express.static(path.join(__dirname, 'dist/node-ang')));
//using middleware
app.use('/posts',posts);
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/dist/node-ang'));
});






module.exports = app;