const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const app = express();
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes=require('./routes/contactus');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(errorController.get404);


app.listen(4000);