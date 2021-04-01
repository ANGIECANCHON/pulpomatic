const express = require('express');
const fetch = require('node-fetch');
const humanController = require('./src/Controllers/HumanAidController')

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/humanAid", humanController.register)
app.get("check")

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
});

module.exports = app;
