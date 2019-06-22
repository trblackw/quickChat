const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const proxy = require('http-proxy-middleware');
const routes = require('./routes');
const Bundler = require('parcel-bundler');
const app = express();

//config
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/public')));
app.use('/api', proxy({ target: 'http://localhost:8080' }));
app.use(routes);


const port = process.env.PORT || 8080
app.listen(port, (): void => {
   console.log(`server running on port ${port}`);
});
