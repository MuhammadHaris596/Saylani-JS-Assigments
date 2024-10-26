//Qno1
var firstname = prompt("Enter your first Name :")
var lastname = prompt("Enter your last Name :")

var fullname = firstname + " " + lastname
alert(` Hello How are you ${fullname}`)

//Qno2
var favouritePhone = prompt("What is your favourite Mobile Phone Model")
document.write(` <h1> My favourite Mobile Phone is : ${favouritePhone} </h1> `)

document.write(`<h1>Length of string is : ${favouritePhone.length} </h1>`)

//Qno3
var country ="Pakistani"

document.write(`<h1> String  : ${country}</h1>`)

document.write(`<h1>Index of 'n' is : ${country.indexOf("n")}</h1>`)


//Qno4
var Greet = "Hello World"
document.write(`<h1> String : ${Greet} </h1>`)

document.write(`<h1> Last Index of 'l': ${Greet.lastIndexOf("l")} </h1>`)


//Qno5
var country1 ="Pakistani"

document.write(`<h1> String  : ${country1}</h1>`)

document.write(`<h1>Character At index 3 is : ${country1.charAt(3)}</h1>`)

//Qno6
var firstname1 = prompt("Enter your first Name :")
var lastname1 = prompt("Enter your last Name :")

var fullname = firstname1.concat(" ",lastname1)
alert(` Hello How are you ${fullname}`)

//Qno7
city = "Hyderabad"
document.write(`<h1>City : ${city} </h1>`)
document.write(`<h1>After Replacement: ${city.replace("Hyderabad" , "Islamabad")} </h1>`)


//Qno8
var message = "Ali and Sami are best friends. They play cricket and football together"
document.write(`<h1>${message.replaceAll("and","&")}</h1>`)


//Qno9

var value= "472"
document.write(`<h1> value  : ${value}</h1>`)
document.write(`<h1> Type : ${typeof(value)}</h1>`)

document.write(`<h1> value  : ${parseInt(value)}</h1>`)
document.write(`<h1> value  : ${typeof(parseInt(value))}</h1>`)


//Qno10
var userinp = prompt("Enter any sentence or words :").toUpperCase()
document.write(`<h1> Uppercase : ${userinp}</h1>`)



//Qno11
var jsInp = prompt("Enter any word : ")
var titleCase = jsInp[0].toUpperCase() + jsInp.slice(1)
alert(titleCase)

//Qno12
var variableNo = 35.36
document.write(`<h1>Number : ${variableNo}</h1>`)

var strNum = variableNo.toString().replace(".","")
document.write(`<h1>Result : ${strNum}</h1> `)

//Qno13


//my code without any function
var username = prompt("Enter your username :")
var specialSymbol = ["@","." ,",","!"]
for ( var i = 0 ; i < username.length; i++){
    for ( var u = 0 ; u < specialSymbol.length ; u++){
 
    if( specialSymbol[u] ===  username[i]  ){
        alert("Please Enter Valid user name ")
        break;
    }
}
}

// with function
var username = prompt("Enter your username :")
var specialSymbol = ["@","." ,",","!"]
for ( var i = 0 ; i < username.length; i++){
   
    if(specialSymbol.includes(username[i])){
        alert("Please enter valud username")
        break;
    }
}




//Qno14

var a = ["cake", "apple", "pie", "cookie", "chips", "patties"]
var searchInp = prompt(" Welcome to Bhasahani Bakey . What do you want to order sir/ma'am ?").toLowerCase()
var found;
var item;
var index;
for( var i = 0 ; i < a.length ; i++){
    if(a[i] === searchInp){
        found = true
        index = i
        item= a[i] ;
        break;
    }
}

if ( found ){
    alert(`The ${item} is available at index in our bakery ${index}`)
}

else{
    alert(`The item is not available at index in our bakery`)
}


//Qno 15
var password = prompt("Enter your Password")
 alert(`Entered password is : ${password}`)

        if ( password.length >= 6){
            
            if (  password.charCodeAt(0) <= 57){
                alert(`Password can not begin with a number `)
            }
    
        }

     


    
    


   //Qno16

   var university = "University of Karachi".split("")
  
   for ( var  i = 0 ; i < university.length ; i++){

          document.write(` ${university[i]}  <br>` )
   }

    //Qno17
    var inp = prompt("Enter your country name")
    var lastcharacter = inp[inp.length-1]
    alert(lastcharacter)

    //Qno18
    var string = "The quick brown fox jumps over the lazy dog.".toLowerCase().split(" ")
     var count= 0 ;
    
    for ( var i = 0 ; i < string.length ; i++){
        if ( string[i] === "the"){
            count++;
        
        }

    }

    alert(`There are ${count} occurence of the word the ` )