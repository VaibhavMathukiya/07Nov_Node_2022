const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const studentScema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    pass: {
        type: String
    },
    img: {
        type: String
    }

})

studentScema.pre("save", async function () {
    try {
        this.pass = await bcrypt.hash(this.pass, 10);
    } catch (error) {
        console.log(error);
    }

})


module.exports = new mongoose.model("Student", studentScema)