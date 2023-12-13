// Import express package
const express = require('express');
const dataBase = require ('./db/db.json');


// Require the JSON file and assign it to a variable called `termData`
const termData = require('./terms.json');
const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();
