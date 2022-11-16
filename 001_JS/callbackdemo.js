

function add(a, b, callback) {
    callback(a + b);
}

function square(a, callback) {
    callback(a * a, a * a * a)
}

var myfunction = () => {
    add(10, 20, (result) => {
        square(result, (sq, qb) => {
            console.log(sq + " " + qb);
        })
    })
}

myfunction();