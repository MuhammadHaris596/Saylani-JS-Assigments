//Qno1
var a = 10

document.write( 
       `Result: <br>
       The value of a  is : ${a} <br> <br><br><br>` 
)

document.write( 
    `The value of  ++a  is : ${++a} <br>
     Now The value of  a  is : ${a} <br> <br><br>
    ` 
)

document.write( 
    `The value of a++ is : ${a++} <br>
     Now The value of a  is : ${a} <br> <br><br><br>
    ` 
)


document.write( 
    `The value of --a is : ${--a} <br>
     Now The value of a  is : ${a} <br> <br><br><br>
    ` 
)
document.write( 
    `The value of  a-- is : ${a--} <br>
     Now The value of a  is : ${a} <br> <br><br><br>
    ` 
)


//Qno2

var a=2 , b=1 ;
var result= --a - --b + ++b +b--;
     //       1  -  0  +  1  + 1
               //   3


document.write(` The value of a is : 2 <br><br>
                 The value of b is : 1 <br><br>
                 The result is : ${result} <br><br>
            `)


//Qno3 
var name= prompt("What is your name : ")
alert ( `Hello how are you ${name} `)



//Qno5
var number = + prompt("Enter any number by your choice " , 5)

for(i = 1 ; i<=10; i ++){
    document.write(` ${number} x ${i }  =  ${number* i} <br> <br>` )
}

//Qno6

var totalmarks_eachSubject= 100;
var Totalmarks = 300;

var subjectone =  prompt("Enter your first subject name:")

var subjectone_Obtainedmarks = + prompt("Enter your marks for first subject  :")

var Percentage1 = (subjectone_Obtainedmarks / totalmarks_eachSubject * 100 )

var subjecttwo =  prompt("Enter your second subject name :")

var subjecttwo_Obtainedmarks = + prompt("Enter your marks for second subject  :")

var Percentage2 = (subjecttwo_Obtainedmarks / totalmarks_eachSubject *100)

var subjectthree =  prompt("Enter your third subject name :")

var subjecthree_Obtainedmarks = + prompt("Enter your marks for third subject  :")

var Percentage3 = (subjecthree_Obtainedmarks / totalmarks_eachSubject * 100 )

var Percentage = (subjectone_Obtainedmarks + subjecttwo_Obtainedmarks + subjecthree_Obtainedmarks ) / Totalmarks * 100 






document.write(`
    
               <table>

               <tr>

               <th>Subject</th>

               <th>Total Marks</th>
               
                <th>Obtained Marks</th>

                <th>Percentage</th>
               
               </tr>

               <tr>

                 <td>${subjectone}</td>

               <td> ${totalmarks_eachSubject}</td>
               
                <td>${subjectone_Obtainedmarks}</td>

                <td>${Percentage1} %</td>

               </tr>


                <tr>

                 <td>${subjecttwo}</td>

               <td> ${totalmarks_eachSubject}</td>
               
                <td>${subjecttwo_Obtainedmarks}</td>

                <td>${Percentage2} %</td>

               </tr>

                <tr>

                 <td>${subjectthree}</td>

               <td> ${totalmarks_eachSubject}</td>
               
                <td>${subjecthree_Obtainedmarks}</td>

                <td>${Percentage3} % </td>

               </tr>
               

                 <tr>

                 <th></th>

               <th> ${Totalmarks}</th>
               
                <th>${subjectone_Obtainedmarks + subjecttwo_Obtainedmarks + subjecthree_Obtainedmarks}</th>

                <th>${Percentage} %</th>

               </tr>
               
               </table>
    
    
    `);