const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(bodyparser.json())
app.use(cors())
app.get('/',function(req,res)
{
    res.send("hello i am belonging from the server");
})
app.post('/enroll',function(req,res)//receving post data with /enroll end point 
{
    console.log(req.body)
    res.status(401).send({"message": "data recevied to the server from the client"});
})
app.listen(port,function()
{
    console.log("my express server is running on the" +port);
})