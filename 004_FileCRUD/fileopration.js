
const fs = require("fs");


const addFile = (data) => {

    const dt = JSON.stringify(data)
    fs.writeFile("userdetail.json", dt, () => {
        console.log("file written successfully");
    })
}

const viewFile = () => {
    const data = view()
    console.log(data);
}

const view = () => {

    var dt;
    // fs.readFile("userdetail.json", "utf-8", (err, data) => {
    //     dt = JSON.parse(data);
    // })
    var data = fs.readFileSync("userdetail.json", "utf-8")
    dt = JSON.parse(data)
    return dt;
}



module.exports = { addFile, viewFile }