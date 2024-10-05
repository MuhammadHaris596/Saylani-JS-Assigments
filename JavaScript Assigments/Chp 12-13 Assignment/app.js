//Qno 1


var inputChar = prompt("Enter a character (number or letter):");

var asciiCode = inputChar.charCodeAt();

// Check the type of input
if (asciiCode >= 48 && asciiCode <= 57) {
  alert(inputChar + " is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
  alert(inputChar + " is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
  alert(inputChar + " is a lowercase letter.");
} else {
  alert(inputChar + " is neither a number nor a letter.");
}


//                 //Qno 2


var integer1 = + prompt("Enter the integr number one :")
var integer2 = + prompt("Enter the integr number two :")

if( integer1 > integer2){
    alert(`The largest integer is ${integer1}`)
}

else if (integer2 > integer1){
    alert(`The largest integer is ${integer2}`)
}

else if ( integer1 == integer2){
    alert(`Both integers ${integer1} & ${integer2} is equal`)
}

else{
    alert("invalid")
}


// //                     //Qno 3


var inpnum = + prompt("Enter the integer number one :")

if( inpnum > 0){
    alert(`The number is positive`)
}

else if ( inpnum < 0 ){
    alert(`The number is negative`)
}

else if ( inpnum == 0 ){
    alert(`The number is zero`)
}



// //Qno 4

var char = prompt("Enter any character")

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){

        alert(`The ${char} is vowel`)
    }

    else{
        alert(`The ${char} is not a  vowel`)
    }



// //Qno 5

// // a,b)

var signuppasssword = prompt("Enter password to signup")
var loginpassword = prompt("Enter your password to Login")

if( loginpassword === ""){
    alert("PLease Enter your password ,It is required!")
}

else if ( loginpassword === signuppasssword ){
    alert("Correct ! The password you entered matches the original password")
}


else{
    alert("Incorrect Password!")
}


//     //Qno 6

var greeting = + prompt("Enter any character ");
var hour = 13;


if (hour < 18) {
    greeting = "Good day";

}

else {
    greeting = "Good evening";

}

console.log(greeting)



