const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs")
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


router.get("/display", async (req, resp) => {
    try {
        const users = await User.find(); +
            resp.render("display", { data: users })
    } catch (error) {
        console.log(error);
    }
})

router.get("/delete", async (req, resp) => {
    const _id = req.query.did
    try {
        await User.findByIdAndDelete(_id);
        resp.redirect("display")
    } catch (error) {
        console.log(error);
    }
})

router.get("/update", async (req, resp) => {
    const _id = req.query.uid
    try {
        const user = await User.findOne({ _id: _id });
        resp.render("update", { data: user })
    } catch (error) {
        console.log(error);
    }
})

router.post("/updateUser", async (req, resp) => {

    try {
        await User.findByIdAndUpdate(req.body.id, req.body);
        resp.redirect("display")
    } catch (error) {

    }
})

router.get("/loginpage", (req, resp) => {
    resp.render("login")
})

router.post("/login", async (req, resp) => {

    try {
        const user = await User.findOne({ email: req.body.email })

        const isvalid = await bcrypt.compare(req.body.password, user.password)

        if (isvalid) {


            const token = await user.generateToken();
            
            resp.redirect("display")
        }
        else {
            resp.render("login", { msg: "Invalid email or password" })
        }

    } catch (error) {
        resp.render("login", { msg: "Invalid email or password" })
    }


})
module.exports = router