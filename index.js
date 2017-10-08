'use strict';

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

require('./api/config.js')(app);
require('./api/routes.js')(app);

app.listen(port, function(){
    console.log("Server running on port "+ port +"...");
});
