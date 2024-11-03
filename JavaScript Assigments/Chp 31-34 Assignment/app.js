//Qno 1
var date = new Date()
document.write(`<h3>${date}</h3>`)


//Qno 2
var month = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

var Month = new Date().getMonth()

month = month[Month]
// document.write(`<h3>${Month}</h3>`)
document.write(`  <h3> Current Month :${month} </h3>`)


//Qno 3
var letters = new Date().getDay()
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
dayNames = dayNames[letters].slice(0,3)
document.write(`<h3> Today is : ${dayNames} </h3>`)


// Qno4--
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date().getDay()
dayNames = dayNames[day]

if (dayNames === "Sunday" || dayNames === "Saturday"){
    alert(` It's Fun Day ${dayNames} `)
}

else{
    alert(` Today  Not Fun Day ${dayNames}!`)
}


//Qno05
var Dates = new Date().getDate()
if (Dates < 15){
    alert(`First ${Dates} days of the month`)
}

else{
    alert(`First Fifteen Days of the month`)
}

// //Qno6
var cuurentdate = new Date()
document.write(`<h3>Current Date : ${cuurentdate}</h3>`)

 cuurentdate =  new Date().getTime()
document.write(` <h3>Ellapsed milliseconds since January 1, 1970 ${cuurentdate}</h3>`)


 var curentdate = Math.round( new Date().getTime() / (1000 * 60))

//  document.write(` <h3> Ellapsed minutes since January 1, 1970 ${curentdate}</h3>`)


 ///Qno 7
 curentdate = new Date().getHours()

 if ( curentdate == 24 || curentdate == 12 ){
    alert(`It's AM`)
 }

 
 else {
    alert(`It's PM`)
 }


 //Qno 8
 var laterDate = new Date(2020,12,0)
 console.log(laterDate)


 //Qno 9
 var ramdanDate = new Date()
 var ramdan = new Date("June 18,2015")

 var result = ramdanDate - ramdan
 var pastDate = Math.round((result / (1000 * 60 *60 * 24 )))
 alert("   Number of days since 1st Ramadan: " +pastDate  );


//Qno 10

var referenceDate = new Date("Sat 5 Dec ,2015")

var pastreference = new Date()

var ress =  pastreference - referenceDate 

var seconds = Math.round(ress / (1000))
console.log(seconds)


//Qno 11

var hours = new Date()
console.log(`Current Date : ${hours}`)

  hours.setHours(hours.getHours()-1)
console.log(`1 hour ago it was , ${hours} `)


//Qno12
var hours100 = new Date()
console.log(`Current Date : ${hours100}`)

 var ressss = hours100.setFullYear(hours100.getFullYear() - 100)
console.log(`100 yeas back it was , ${hours100} `)


//Qno13
var userage = +prompt("What is your age :")

var userDate = new Date().getFullYear()
var reDate = userDate - userage
console.log(reDate)


//Qno 14



var customername = prompt("Whay is your name") 
document.write(`<h3> Customer Name : ${customername}</h3>`)



var currentmonth = prompt("Enter current Month") 
document.write(`<h3> Current Month : ${currentmonth}</h3>`)



var noOfunits = +prompt("Whay is your total units") 
document.write(`<h3> Total units : ${noOfunits}</h3>`)

var Chargesperunit = +prompt("Whay is your Charges per unit") 
document.write(`<h3> Charges per unit : ${ Chargesperunit}</h3>`)

var NetAmountPayable =  noOfunits * Chargesperunit
 document.write(`<h1> Net Amount Payable : ${ NetAmountPayable  }</h1>`)

var LatePaymentSurcharge = +prompt("Whay is your Late payment ") 

var GrossAmountPayable =  NetAmountPayable + LatePaymentSurcharge
document.write(`<h1> Gross Amount Payable :${ GrossAmountPayable}</h1>`)
