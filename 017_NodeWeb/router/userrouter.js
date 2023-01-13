const router = require("express").Router()
const User = require("../model/User")

router.get("/", (req, resp) => {
    resp.render("index")
})

router.post("/adduser", async (req, resp) => {
    try {
        const user = new User(req.body)
        await user.save();
        resp.render("index", { "msg": "Registration successfully done !!!" })
    } catch (error) {

    }
})

module.exports = router