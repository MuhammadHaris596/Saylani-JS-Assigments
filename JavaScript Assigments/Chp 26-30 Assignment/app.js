//Qno1
var positive = prompt("Enter any positive integer :")
// //a
document.write(`<h1> number : ${positive}</h1>`)

// //b
document.write(`<h1> round off value : ${Math.round(positive)}</h1>`)

// //c
document.write(`<h1> floor value : ${Math.floor(positive)}</h1>`)


// //d
document.write(`<h1> ceil value : ${Math.ceil(positive)}</h1>`)



//Qno2
var negative = prompt("Enter any negative integer :")
// //a
document.write(`<h1> number : ${negative}</h1>`)

// //b
document.write(`<h1> round off value : ${Math.round(negative)}</h1>`)

// //c
document.write(`<h1> floor value : ${Math.floor(negative)}</h1>`)


// //d
document.write(`<h1> ceil value : ${Math.ceil(negative)}</h1>`)


//Qno3
var absolute = prompt("Enter any value to find its absolute number :")
document.write(`<h1> The absolute value is  : ${Math.abs(absolute)}</h1>`)


//Qno4

var randomValue =  Math.random()*5
document.write(` <h1>random dice value : ${Math.round(randomValue)} </h1>`)
document.write(` <h1>random dice value : ${Math.floor(randomValue)} </h1>`)

//Qno 5
var randomValue1 =  Math.random()*5
document.write(` <br> <h1> ${Math.round(randomValue1)}  <h1>random coin value : Heads </h1>`)
document.write(`  <h1> ${Math.ceil(randomValue1)}  <h1>random coin value : Heads </h1>`)


//Qno6
var randomValue2 =  Math.random()*100
document.write(` <br> <h1> random value between 1 and  100 : ${Math.floor(randomValue2)}  </h1>  `)

//Qno7
var weight = prompt("What is your age ?")
document.write(`  <h1> The weight of the user is  : ${parseFloat(weight)} kilograms  </h1>  `)


//Qno8

var ask = +prompt("Enter a number between 1 and 10")

var secretNum =  Math.round(Math.random() * 9)

if( ask === secretNum){
    alert("Congratulations You guess correctly")
}

else{
    alert("Try again !")
}
