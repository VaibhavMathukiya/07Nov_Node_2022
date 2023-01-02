const mongoose = require("mongoose")
const express = require("express")
const app = express();
const PORT = 9000;
app.use(express.json())
const dburl = "mongodb+srv://tops:tops@cluster0.t3ni3is.mongodb.net/mydb?retryWrites=true&w=majority"

mongoose.connect(dburl).then(() => {
    console.log("db connected");
}).catch(err => {
    console.log(err
    );
})

const userrouter = require("./router/userrouter")
app.use("/", userrouter)

app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
})
