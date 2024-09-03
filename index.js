const express = require("express")
const app = express()

setInterval(async ()=>{
let data = await fetch("https://chat-app-c2ux.onrender.com/choreo");
console.log(data);
data = await fetch("https://team-c3rb.onrender.com/choreo");
console.log(data);
}, 600000);

app.listen(3000, ()=>{console.log("Listening on port 3000...")})