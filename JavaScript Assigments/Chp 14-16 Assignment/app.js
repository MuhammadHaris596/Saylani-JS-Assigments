// Qno 1

var futureelements = [""]

console.log(futureelements)

///Qno2

var arr = new Array("")
console.log(arr)


////Qno3

var stringarr= ["My name is Muhammad Haris . I am  21 years old pursuing BS in Computer Sciene"]
console.log(stringarr)

////Qno4


var interarr=[1 , 2 ,3 ,4 ,5]
console.log(interarr)

////Qno5


var boolarr=[ true, false]
console.log(boolarr)


////Qno6
var mixarr=[ true, false , 21 ,"Muhammad Haris`"]
console.log(mixarr)

////Qno7

var qualtifications = ["1) SSC" ,"2) HSC","3) BCS","4) BS","5) BCOM","6) MS","7) M.PHIL.","8) PHD"]
document.write("<h3>Qualifications : </h3>")

for( var i = 0 ; i < qualtifications.length ; i++){
    document.write(` <br> ${qualtifications[i]} <br>`)

    
}


///Qno8

var std_name =["Sulaeh Farroq" , "Muhammad Ali", "Ishaq Bhojani"]

var std_score =[]

var totalmarks= 500;

for ( var score = 0 ; score < 3 ; score++){
    
    std_score[score] =  + prompt(`Enter the score of student ${score+1}`)
}

document.write(`<br> Score of Sulaeh Farooq  is ${std_score[0]} . Percentage : ${std_score[0]/ totalmarks *100} <br> <br>
                Score of Muhammad Ali  is ${std_score[1]} . Percentage : ${std_score[1]/ totalmarks *100}   <br> <br>
                Score of Ishaq Bhojani  is ${std_score[2]} . Percentage : ${std_score[2]/ totalmarks *100}  <br> <br>
    
    `)

 //////////Qno9 // a)
    var colornames=["<br> Blue","Yellow","Red","Purple"]
    document.write(`<b>${colornames}</b> <br> <br>`)

    //////////Qno 9 /b)


    var color = ["purple","blue","yellow"]
    var  askuser =  +prompt("How many color you want to add  at the begining")

    for( var c = 0 ; c < askuser ;  c++ ){
        color[c] = prompt(` Add color ${c + 1}`)

        document.write(`<br> <br> The Colors is ${color[c]}`)
    }

    //OR use push method 
    var color_by_user= prompt("Enter the color at the begining ")
    color.unshift(color_by_user)
    document.write(color)


//b

var colorby_user= prompt("Enter the color at the end ")
color.push(colorby_user)
document.write(`<br><br> ${color}`)
  
// //c
color.unshift("Blue","Grey")
document.write(`<br><br> ${color}`)

// //d
color.shift()
document.write(`<br><br> ${color}`)

// //e
color.pop()
document.write(`<br><br> ${color}`)

//f
var askuser_index = +prompt("At which index you want to add the element:")
var asuser_color =  prompt("Give the color name :")
    
color.splice(askuser_index,0,asuser_color)
document.write(`<br><br> ${color}`)


//g
  askuser_index = +prompt("At which index you want to start the deletion of element:")
 asuser_color =  +prompt("How many colors you want to delete ?")
    
color.splice(askuser_index,asuser_color)
document.write(`<br><br> ${color}`)



//Qno 10
var int_array=[320,230,480,120]
document.write(`<br><br> <h3> Scores of students :</h3> ${int_array}`)

int_array.sort()
document.write(`<br><br>  <h3> Ordered Scores of students :</h3> ${int_array}`)



//Qno 11

var char_array=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write(`<br><br> <h3> Cities List  :</h3>  ${char_array}`)

var slice_array = char_array.slice(2,5)
document.write(`<br><br> <h3> Selected Cities List  :</h3>  ${slice_array}`)


//Qno 12
var arr=["This","is","my","cat"]
document.write(`<br><br> <h1> Array: <br> ${arr} </h1>`)

document.write(`<br> <h1> String: <br> ${arr.join(" ")} </h1>`)


//Qno 13
document.write(` <h1> FIFO: </h1> `)

var acess_FIFO = ["Keyboard","Mouse","printer","Monitor"]
document.write(` <h1> Devices: </h1>  ${acess_FIFO}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.shift()}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.shift()}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.shift()}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.shift()}`)



//Qno 14
document.write(` <h1> LIFO: </h1> `)

acess_FIFO = ["Keyboard","Mouse","printer","Monitor"]

document.write(` <h1> Devices: </h1>  ${acess_FIFO}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.pop()}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.pop()}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.pop()}`)


document.write(`<h1> Out: </h1> ${acess_FIFO.pop()}`)



//Qno 15
var Mobile_manufacturer = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

document.write(" <br> <br> <h1>  Mobile Manufacturer : </h1>")
document.write(`  <h1>  <select>  </h1>`)


for( var m = 0 ; m < Mobile_manufacturer.length ; m++){

    document.write(`<option value="${Mobile_manufacturer[m]}" > ${Mobile_manufacturer[m]} </option>`)
}

document.write(` <br> <br> <h1>  </select>  </h1>`)

