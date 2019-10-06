const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const config = require('./config');

const app = express();
const pageConfig = {
    serviceWorker: config.serviceWorker,
    title: config.webTitle,
    logo: config.logo,
    menus: config.menus,
};

//  Handlebars Middleware
app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

//  Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//  Homepage route
app.get('/', (req, res) => res.redirect(`/${config.menus[0].name}`));

config.menus.forEach(element => {
    app.get(`/${element.name}`, (req, res) => res.render('index', {
        ...pageConfig,
        data: element.name
    }));
})

// Set static folder for assets
app.use(express.static(path.join(__dirname, 'public')));

app.listen(config.port,() => console.log(`Server started on port ${config.port}`));