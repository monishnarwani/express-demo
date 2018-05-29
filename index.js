const express = require('express');
const app = express();
const joi = require('joi');
const routesFunc = require('./home-controller');

app.get('/', routesFunc.homePage);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('App is running at http://localhost:' + PORT));

