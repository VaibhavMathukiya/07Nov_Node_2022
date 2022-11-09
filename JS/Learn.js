
//var firstName = "Tops";
//var lastName = "Tech";

//diff betwen undefied and null
// var myValue = null;
// var myData;

// console.log(typeof (myValue));
// console.log(typeof (myData));

//oprators : 

// console.log(4 + 4);
// console.log(4 + "data");
// console.log(4 + "4");
// console.log(5 - "data");
// console.log(7 - "5");
// console.log(5 ** 8);

//diffrenc ebetween ==, ===
// var a = 2;
// var b = "2";

// console.log(a == b); // value
// console.log(a === b); //datatype

//turnary
// var a = 100;
// var b = 2000;
// var c = 600;

// var result = (a > b) ? (a > c) ? a : c : (b > c) ? b : c
// console.log(result);


//statements 

// if (a > b) {
//     if (a > c) {
//         console.log("a is greater");
//     }
//     else {
//         console.log("c is greater");
//     }
// }
// else {
//     if (b > c) {
//         console.log("b is greater");
//     }
//     else {
//         console.log("c is greater");
//     }
// }


// if (a > b && a > c) {
//     console.log("a is greater");
// }
// else if (b > c && b > a) {
//     console.log("b is greater");
// }
// else if (c > a && c > b) {
//     console.log("c is greater");
// }


// var choice = 5;

// switch (choice) {
//     case 1:
//         console.log("Gujarati");
//         break;
//     case 2:
//         console.log("Hindi");
//         break;
//     case 3:
//         console.log("English");
//         break;
//     default:
//         console.log("invalid choice");
//         break;
// }

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

//function

function add(a, b) {
    var c = a + b;
    console.log("addition is : " + c);
}

//add(10, 20)
//add(50, 60);
//add(5)

function square(a) {
    return a * a;
}

// var r = square(5)
// console.log(r);
// console.log(square(10));

var mul = (a, b) => {
    // console.log("multiplication of " + a + " and " + b + " is " + (a * b));
    console.log(`multiplication of ${a} and ${b} is ${a * b}`);
}

//mul(10, 20)

//let,var, const

// var fname = "tech";
// let lname = "tops";

// console.log(fname);
// console.log(lname);

function mydata() {
    //var fname = "tech";
    //let lname = "tops";
    if (true) {
        var fname = "tech";
        let lname = "tops";
    }
    console.log(fname);
    console.log(lname);
}

//mydata()
















