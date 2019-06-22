const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const routes = require('./routes');
const app = express();

//config
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(routes);


const port = process.env.PORT || 8080
app.listen(port, (): void => {
   console.log(`server running on port ${port}`);
});
