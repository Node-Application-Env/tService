import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

require("dotenv").config();

// Set up the express app
const app = express();

const port = process.env.APPLICATION_PORT || 8000;
app.set('secretKey', 'nodeRestApi'); // jwt secret token

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/* ************************************************************************ */
var originsWhitelist = ['http://localhost:8000'];
var corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
}
// HERE is the magic
app.use(cors(corsOptions));
/* ************************************************************************ */
// app.get('/favicon.ico', (req, res) => { res.sendStatus(204); });

const indexRoute = require('./server/routes');
// // public route
app.use('/api', indexRoute);

// handle 404 error
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle errors
app.use((err, req, res, next) => {  
//   console.log(err);
  if (err.status === 404)
      res.status(404).json({ message: "Not found (Invalid endpoint)" });
  else
      res.status(500).json({ message: "Something looks wrong :( !!!" });
});

/* ---------------------------------------------------------------------------------- */
app.listen(port, () => { console.log(`application running ${port}`); });
/* ---------------------------------------------------------------------------------- */
module.exports = app;
