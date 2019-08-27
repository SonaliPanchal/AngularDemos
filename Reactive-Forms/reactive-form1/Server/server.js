const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.get('/',function(req,res)
{
    res.send("hello I am belonging from the server")
})

app.listen("9000",function()
{
    console.log("hello my server is working on 9000 port")
})