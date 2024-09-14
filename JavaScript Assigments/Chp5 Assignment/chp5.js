
//Qno1
var num1=5;
var num2=3;

var num= num1 + num2;
document.write("The sum of 3 & 5 is " + num);

//Qno2

num= num1-num2;
document.write("<br>The subtract of 3 & 5 is " + num);


num=num1*num2;
document.write("<br>The multiply of 3 & 5 is " + num);

num=num1/num2;
document.write("<br>The division of 3 & 5 is " + num);


num=num1 % num2;
document.write("<br>The remainder of 3 & 5 is " + num);


//Qno3
//a)
var value;


//b)
document.write("<br>The value after variable declaration is " + value);

//c)
value=5;

//d)
document.write("<br>The initial value is: " +value);

//e)
++value;

//f)
document.write("<br>The  value after increment  is: " +value);


//g)
value=value+7;

//h)
document.write("<br>The  value after addition  is: " +value);

//i)
--value;

//j)
document.write("<br>The  value after decrement  is: " +value);


//k)

value=value/3;
document.write("<br>The  value after dividing the variable's value   is: " +value);

//l)
document.write("<br>The  remainder  is: 0    " );


//Qno 4
var ticket= 600*5;
document.write("<br>The total cost to buy 5 tickets to a movie is  " +  ticket);


//Qno5
// var table= +prompt("Enter the number to generate the table number :")
// for(i=1; i<=10; i++){
    
//     document.write( "<br> <br>"+table + "x" + i + " = "+  table*i +"<br>");
// }


//Qno6 
//a)
var celsius=25;
//c) 
var farenhiet=70;


//b)
var celsiusConcoverter = (farenhiet-32) * 5/9;

//d)
var farenhietconverter = ( celsius *  9/5) + 32;



document.write("<br><h1>The temperature converter : </h1>")
document.write("<br> 25<sup>0</sup>C is " + farenhietconverter +"<sup>0</sup>F")
document.write("<br> 70<sup>0</sup>F is " + celsiusConcoverter +"<sup>0</sup>C   <br><br><br><br>")








//Qno7
//a)
var price1=650;

//b)
var price2= 100;

//c)
var quantity1=3;

//d)
var quantity2=7;

//e)
var shipping=100;

//a) output
document.write("<br>The price of item1 is : " +price1)


//c) output
document.write("<br>The Quantity of item1 is : " +quantity1)

//b) output
document.write("<br>The price of item 2 is : " +price2)



//c) output
document.write("<br>The Quantity of item 2 is : " +quantity2)

//output
document.write("<br>The total cost of your order is : " +  ((price1 * quantity1) + (price2 * quantity2)));


//Qno8
var totalmarks=980;
var obtainedmarks=804;
document.write("<br>Percentage : " + obtainedmarks / totalmarks *100);



//Qno9
var usDollar=104.80 ;
var saudiRiyal= 28 ;

document.write("<br>Total currecncy in PKR is :" +  ((10*usDollar)  + (25*saudiRiyal)) );


//Qn010

var num=5;

//a) b) c) perform in sinle expression
num= (num+5 *10 /2);



document.write("<br> <h1>Age Calculator</h1>");
document.write("<br> The number is : " + num);


//Qno11 

//a)
var currectyear = +prompt("Ener the currect Year :");
document.write("<br>Currect Year : " + currectyear)



//b)

var birthyear = +prompt("Ener  your birth year :");
document.write("<br> Birth Year : " + birthyear)


//c)
document.write("<br>Your age is : " +  Number(currectyear-birthyear));


//Qno 12
//a)
var radius= 20;
var pi=3.142; 
document.write("The Radius of circle is: " + radius);  


//b)
document.write(" <br>The circumference of circle is : " + (2*pi*radius) );


//c)
document.write(" <br>The area is : " + (pi*radius*radius));



//Qno 13
//a)
var favouritesnack= prompt("Enter your Favourite Snack :");

//b)
var currectage= +prompt("Enter your current age :");

//c)

var maximumage= +prompt("Enter your maximum age :");

//d)

var estimatedamount= +prompt("Enter estimated amount per day :");

//e)
var restlife= maximumage - currectage;
var snack= restlife * estimatedamount;

document.write("<br> <h1>The Lifetime Supply Calculator : </h1>")
document.write("<br> Favourite Snack : " + favouritesnack);
document.write("<br> Currecnt Age : " +  Number(currectage));
document.write("<br> Estimated MAximum  Age: " + Number(maximumage));
document.write("<br> Amount of snacks per day : " + Number(estimatedamount));



document.write(" <br>You will need " + snack + "  " +  favouritesnack + " to  last  you until th age of " + maximumage);








