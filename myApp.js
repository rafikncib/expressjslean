require('dotenv').config()
let express = require('express');
let app = express();


/*app.get("/",function(req,res){
    res.send("Hello Express");
});*/
let absolutePath=__dirname+'/views/index.html';
app.get("/",function(req,res){
    res.sendFile(absolutePath);
});
let pathAssets=__dirname + '/public';
app.use('/public',express.static(pathAssets));

app.get("/json", (req, res) => { let message = "Hello json"; (process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; res.json({"message": message}); });




























 module.exports = app;
