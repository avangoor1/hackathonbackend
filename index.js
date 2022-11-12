const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;
app.post("/upload-data",(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
    response.send(request.body);
    });

app.get("/", (req, res) => {
    res.send("Hello Ananya's World");
});

app.get("/players", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log('Example app is listening on port http://localhost:${port}');
});