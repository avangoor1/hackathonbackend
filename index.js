const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const importData = require("./data.json");


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;
app.post("/upload-data",(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    const arduinoData = request.body;
    console.log("Here is my data: "+ arduinoData);
    response.send(arduinoData);
    document.getElementById('smname').value = arduinoData;
    });




app.get("/data", (req, res)=> {
    res.send(arduinoData);
})

app.get("/", (req, res) => {
    res.send('index.html');
});

app.get("/players", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log('Example app is listening on port http://localhost:${port}');
});

