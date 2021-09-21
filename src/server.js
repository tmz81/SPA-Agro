const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'))

// Use files statics CSS/JS/IMG
app.use(express.static('public'))

// Route home
app.get('/', (req, res) => res.render('index.ejs'))

app.listen(process.env.PORT || 5000, console.log('🚀'))