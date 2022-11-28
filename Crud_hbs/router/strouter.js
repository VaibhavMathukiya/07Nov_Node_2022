const express = require("express")
const router = express.Router();
const Student = require("../model/student")

router.get("/", (req, resp) => {
    resp.render("reg")
})

router.post("/addStudent", async (req, resp) => {

    try {
        const std = new Student(req.body)
        
        const result = await std.save();
        resp.render("reg", { msg: "Data inserted successfully !!!" })
    } catch (error) {
        console.log(error);
    }

})




module.exports = router