const express = require("express")
const router = express.Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs")
router.post("/", async (req, resp) => {
    try {
        const user = new User(req.body)

        const data = await user.save();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

router.get("/", async (req, resp) => {
    try {
        const user = await User.find();
        resp.send(user)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const user = await User.findById(id);
        resp.send(user)
    } catch (error) {
        resp.send(error)
    }

})

router.put("/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndUpdate(id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndDelete(id);
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.post("/login", async (req, resp) => {
    try {
        const data = await User.findOne({ email: req.body.email })

        if (!data) {
            resp.send("Invalid email or password")

        }
        else {

            const valid = await bcrypt.compare(req.body.password, data.password)
            if (!valid) {
                resp.send("Invalid email or password")
            }
            else {
                resp.send("welcome : " + data.username)
            }
        }

    } catch (error) {
        resp.send(error)
    }
})


module.exports = router;