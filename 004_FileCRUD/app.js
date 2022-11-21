const yargs = require("yargs")
const file = require("./fileopration")


yargs.command({
    command: "add",
    builder: {
        name: {
            type: String
        },
        email: {
            type: String
        }
    },
    handler: function (argv) {
        const data = {
            name: argv.name,
            email: argv.email
        }
        file.addFile(data);
    }
})

yargs.command({
    command: "view",
    handler: function () {
        file.viewFile()
    }
})



yargs.argv


