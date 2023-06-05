const mongoose = require('mongoose');
const location = require("./location")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://0.0.0.0/location');
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userName = [];

app.use(express.json({ limit: "100kb" }));
app.use(bodyParser.urlencoded({ extended: true }));

port = process.env.PORT || 3000;

app.listen(port , () => console.log("The server is up and listening."))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html")
})

app.get("/location", (request, response) => {
    response.sendFile(__dirname + "/location.html");
})

app.post("/", (request, response) => {
    const name = request.body;
    userName.push(name);
    response.redirect('/location')
})

app.post("/location", (req, res) => {
    const lat = req.body.lat;
    const lon = req.body.lon;

    user();

    async function user() {
        const time = Date.now();
    
        const userLocation = await location.create({
            Latitude: lat,
            Longitude: lon,
            Name: userName[userName.length - 1].name,
            Date: time,
        })
        const db = await location.find({});
    }

    res.json({
        Status: "received",
        Code: "200",
        name: userName[userName.length - 1].name
    })

})

app.post('/db', (req, res) => {
    res.sendFile(__dirname + "/db.html");
})

app.get('/db', async (req, res) => {
    const data = await location.find({});
    const db = await JSON.stringify(data);
    res.send(db);
})