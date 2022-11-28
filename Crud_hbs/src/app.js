const express = require("express")
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT
const dburl = process.env.DB_URL
const path = require("path")
const hbs = require("hbs")
const bodyParser = require('body-parser')

mongoose.connect(dburl).then(() => {
    console.log("DB connected..");
})

//app.use(express.json())

const viewPath = path.join(__dirname, "../templetes/view")

app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "hbs")
app.set("views", viewPath)

const strouter = require("../router/strouter")
app.use("/", strouter)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
