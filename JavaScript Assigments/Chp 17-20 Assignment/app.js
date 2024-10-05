
// Qno 1

var multi_array = [  [] , [] ]
document.write(` <br> Multi Dimensional Array :   ${multi_array}`)


//Qno 2

multi_array = [  [0,1,2,3] , [1,0,1,2] ,  [2,1,0,1] ]

for ( var i = 0 ; i < multi_array.length ; i++){
    document.write(`<br> <br> ${multi_array[i].join(" ")}  <br> <br>`)
}


//Qno 3

for ( var i = 0 ; i <=10 ; i++){
    document.write(`<br> <br>${i}  <br>`)
}


//Qno 4

// var table_num = +prompt("Enter the table's number you want to generate :")
// var table_length = +prompt(" Enter the Table Length :")

// document.write(`<br> <br>Multiplication of table ${table_num}`)
// document.write(`<br> <br> Length ${table_length}`)


// for ( var i = 1 ; i <= table_length ; i++){
//     document.write(`<br> <br> ${table_num} x ${i} = ${table_num * i} <br>`)
// }




//Qno 5

var fruits = ["Apple","Banana","Mango","Orange","Strawberry"]

for ( var i = 0 ; i < fruits.length ; i++){
    document.write(`<br> <br> Element at index ${i} is ${fruits[i]}`)
}


// //Qno 6
// //a 

// document.write(`<br> <br> <h1> Counting : </h1> `)

// for (var i = 1 ; i <=15 ; i++){
//     document.write(`  ${i} ,`)
// }

// //b

document.write(`<br> <br> <h1> Reverse Counting : </h1> `)

for ( var r = 10 ; r >=1 ; r--){
    document.write(`  ${r} ,`)
}

//c

document.write(`<br> <br> <h1> Even : </h1> `)

for ( var i = 0 ; i <= 20 ; i++){

    if ( i % 2 == 0){
    document.write(` ${i} ,`)
    }
}

//d

document.write(`<br> <br> <h1> Odd : </h1> `)

for ( var i = 0 ; i <= 20 ; i++){

    if ( i % 2 !== 0){
    document.write(` ${i} ,`)
    }
}


//d

document.write(`<br> <br> <h1> Series : </h1> `)

for ( var i = 1 ; i <= 20 ; i++){

    if ( i % 2 == 0){
    document.write(` ${i}k ,`)
    }
}


//Qno 7

var A = ["cake", "apple", "pie", "cookie", "chips", "patties"]
var search_by_userinp = prompt("Enter an item to search :")


for( var a = 0 ; a < A.length ; a++){
    if(A[a] === search_by_userinp){
        alert( `The item is found in the bakery at index ${a} `)
    }

    else{
        alert( `The item is not found in the bakery `)
    }

    break;
    
}

//Qno 8
var A = [24, 53, 78, 91, 12]
var largest = A[0]
for( var a = 0 ; a < A.length ; a++){

    if(A[a +1] > largest){
    largest = A[a + 1]
}
}

alert(`The Largest element is ${largest}`)


//Qno 9
var A = [24, 53, 78, 91, 12]
var smallest = A[0]
for( var a = 0 ; a < A.length ; a++){

    if(A[a +1] < largest){
    largest = A[a + 1]
}
}

alert(`The smallest  element is ${largest}`)


//Qno 10

var num = 5;
for( var n = 1 ; n <= 20  ; n++){
    alert(`${n*5}`)
} 

