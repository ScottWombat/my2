var express = require('express');
var app = express();
app.get('/',function(req,res)
{
res.send('Hello World!fff' + process.env.NODE_ENV);
});



app.listen(process.env.PORT || 8080);