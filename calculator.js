// function calculator(x, y){
//     let addition = x + y;
//     let subtraction = x - y;
//     let multiplication = x * y;
//     let division = x / y;
//     console.log(`Addition of ${x} + ${y} is = ${addition}`);
//     console.log(`Subtraction of ${x} - ${y} is = ${subtraction}`);
//     console.log(`Multiplication of ${x} * ${y} is = ${multiplication}`);
//     console.log(`Division of ${x} / ${y} is = ${division}`);
// }

// calculator(10, 20);

function addition(){
    let x = document.getElementById("in1").value;
    let y = document.getElementById("in2").value;
    let z = Number(x) + Number(y);
    let res = document.getElementById("ans");
    res.innerHTML = z;
}
function subtraction(){
    let x = document.getElementById("in1").value;
    let y = document.getElementById("in2").value;
    let z = Number(x) - Number(y);
    let res = document.getElementById("ans");
    res.innerHTML = z;
}
function multiplication(){
    let x = document.getElementById("in1").value;
    let y = document.getElementById("in2").value;
    let z = Number(x) * Number(y);
    let res = document.getElementById("ans");
    res.innerHTML = z;
}
function division(){
    let x = document.getElementById("in1").value;
    let y = document.getElementById("in2").value;
    let z = Number(x) / Number(y);
    let res = document.getElementById("ans");
    res.innerHTML = z;
}
function clean(){
    let res = document.getElementById("ans");
    res.innerHTML = "Result!!";
}

function lol(){
    while (true) {
        alert("I Told You Not To Click!!!")
    }
}