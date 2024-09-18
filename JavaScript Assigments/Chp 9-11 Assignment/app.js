// //Qno1

var city = prompt("Enter your city name :")


if(city === "karachi"){
    alert("Welcome to the city of Lights")
}

else{
    alert("Welcome to the city")
}

// //Qno2

var gender = prompt("Enter your gender :")


if (gender === "Male"){
    alert("Good Morning Sir")
}

else{
    alert("Good Morning Ma'am")
}

//Qno3

var trafficSignal= prompt("Enter the traffic signal")
var message;

if( trafficSignal === "Red"){
   message = "Must Stop"  
}

else if( trafficSignal === "Yellow"){
   message = "Ready to Move"  
}

else if( trafficSignal === "Green"){
   message = "Move Now"  
}

else{
   message ="invalid"
}

document.write(`
        <table>
        
        <tr>
        
        <th> ${trafficSignal} </th>

         <th> ${message}</th>
        
        </tr>
        
        </table>
   
   `)

// //Qno4

var currentfuel = +prompt("Enter your current car fuel:")

if( currentfuel < 0.25){
    alert("Plese refill the fuel in your car")
}

else{
    alert("you don't need to  refill the fuel in your car")
}


//Qno5
//  The B part is false b++ ===83;


//  Qno6


 var subjectone = +prompt("Enter the first subject marks")

 var subjecttwo = +prompt("Enter the second subject marks")

 var subjectthree = +prompt("Enter the third subject marks")


 percentage = (subjectone + subjecttwo + subjectthree) /300 *100;


 var grade;
 var remarks;

 if (percentage >= 80){
    grade = "Aone"
    remarks="Excellent"

 }


 else if(percentage >= 70){
    grade = "A"
    remarks="Good"

 }

 else if(percentage >= 60){
    grade = "B"
    remarks="You need to improve "

 }

 else {
    grade = "Sorry"

 }


 document.write(`
       <h1>Marksheet</h1>
       <p>Marks Obtained : ${subjectone + subjecttwo + subjectthree}</p>
       <p>Percentage : ${percentage}</p>
       <p>Grade: ${grade}</p>
       <p>Remarks : ${remarks}</p>
    
    `)



//Qno 7

var secretnumber = 10;
var guessnumber = + prompt("Enter any number rangning from 1 to 10 :")


if (secretnumber === guessnumber){
   alert("Bingo ! , Correct Answer")
}

else if ( ++guessnumber === secretnumber){
   alert("Close enough to the answer")
}

else {
   alert("You can't guess the secret number")
}

//Qno 8

var givennumber= + prompt("Enter eny number to check whether it is divsible by 3 or not")


if( givennumber%3 === 0){
   alert("The number is divisible by 3")
}

else{
   alert("The number is not divisible by 3")
}


//Wno 9

var givennumber= + prompt("Enter eny number to check whether it is even or odd")


if( givennumber % 2 === 0){
   alert("The number is even")
}

else{
   alert("The number is odd")
}


//Qno 10

var temperture= + prompt("Enter the temperature of your residential area :")
;
if (temperture > 40){
   alert("It is too hot outside")
}

else if (temperture > 30){
   alert("The today's weather is normal")
}

else if (temperture > 20){
   alert("Today's Weather is cool")
}


else if (temperture > 10){
   alert("OMG! Today’s weather is so Cool")
}

else{
   alert("OMG! Today’s weather is so cold")
}


//Qno 11

var firstnumber= + prompt("Enter fisrt number for math opertion")
var secondnumber= + prompt("Enter second number for math opertion")
var opertion =  prompt("Give the operator to perform operation on operand")

var result;

if( opertion === "+"){
   result= firstnumber + secondnumber;
}

else if( opertion === "-"){
   result= firstnumber - secondnumber;
}

else if( opertion === "*"){
   result= firstnumber * secondnumber;
}

else if( opertion === "/"){
   result= firstnumber / secondnumber;
}

else if( opertion === "%"){
   result= firstnumber % secondnumber;
}

else{
   result = "invalid operation"
}


alert(`The result is ${result}`)
