// console.log("hello")

// var myname = "khaled"
// var myage = 30
// var istudent = true
// var myclasstime = 8.5

// console.log(typeof myname,myname)
// console.log(typeof myage,myage)
// console.log(typeof istudent,istudent)
// console.log(typeof myclasstime,myclasstime)

// let pi = 3.14;
// let pi = 3.14;

// pi = 4

// console.log(pi);

// const myName = "khaled"
// const myAge = 30
// const Istudent = true
// const myClasstime = 8.5

// let total;
// console.log(total);

// let userinfo = ["khaled" , 20 , true]

// let userInfo0bj = {
//     name: "khaled",
//     age: 20,
//     isStudent: true,
//     degrees: {
//         arabic: 70,
// //     }
// }

// console.log(userinfo[2]);
// console.log(userInfo0bj.isStudent);

// const userName = "khaled mostafa"

// console.log(userName);



// const degree = prompt("enter your degree");
// const degree = 77



// if (100>=degree&& degree >=90) {
//     console.log("bravo,A");
    
// }
// else if (89 >= degree && degree >=70) {
//     console.log("bravo,B");
    
// }


//  else if (69 >= degree && degree >=50) {
//     console.log("bravo");
    
// }


// else {
//     console.log("pls,try again");
    
// }

// let grade =prompt("enter your drade")


// switch(grade){
// case "A":
//     console.log("your grade is"+ grade);
//     break
//     case "B":
//         console.log("your grade is"+ grade);
        
//      default:
//         console.log(" your grade is not found");
//          break;  
// }

// for( let i =2000;i <=2012; i +=1){


//     console.log(i);
    
// }

// let score = 0;
// while (score <=10){
// const number = prompt ("guess number !");
// if ( number ==100){
//     score +=2;
// }
// console.log(score);

// }
 
// function generateyears(){

// for ( let i = 1900; i <=2024; i += 1){
// if ( i == 2001) {

// continue;


// }
// console.log(i);

// }
// }
    
// generateyears();


// function greeting (name,age ){
//     console.log("welcome,"+ name+ " his age "+ age);
//     console.log(`welcome, ${name} his age $ {age}`);
    
// }

// greeting("hjhj")
// greeting("khaled")
// greeting("khaled",20)

// function sum(num1,num2){
//     return num1 + num2;

// }
// console.log(sum(10,10));


// function uppercase(word){
//     console.log(word.toUpperCase());
    
// }
// uppercase("khaled"); 

// function splitword (word)
// console.log(word.split(" ")) ;


// }
// splitword("khaled-mostafa");


// let studentNmae =[

// "khaled",
// "ayman",
// "yassin",

// ];

// for (const user of studentNmae){
//     console.log(user);
    
// }




// let studentName = [
// {

// Name:"khaled",
// age:20,
// email:"km9601209@gmail.com",
// degree:90

// }

// ]

// const studentdata = studentNmae.find(function (student){
//     return student.Name.toLocaleLowerCase() == "khaled";
// });

// console.log(studentdata);

// const h1Elment = document.querySelector("header h1");
// console.log(h1Elment);

// const sectionElments = document.querySelectorAll("#main-content section")
// console.log(sectionElments);


// h1Elment.style.color = "red";
// h1Elment.style.background = "green";
// h1Elment.innerHTML = "hello khaled"

// sectionElments[0].style.backgroundColor ="red"
// sectionElments[0].innerHTML = "<h1>section heading<h1>"
// sectionElments[2].style.backgroundColor="green"
// sectionElments[1].style.backgroundColor="ultraviolet"

// // for (const student of studentName) {
//     console.log(student.name);
//     // sectionElments[2].innerHTML += `</li> ${student.Name} </li>`
// // }



// const counterp =document.querySelector("#counter p")
// const counterBtn = document.querySelector("#counter button")


// // counterBtn.onclick = function () {
// //     counterp.innerHTML = +counterp.innerHTML + 

// console.log("before settimeout");

// setTimeout(function() {
//     console.log("from settimeout");
    
// }, 1000);


// console.log("after settimeout");

// counterBtn.onclick = function () {
   
// let count =10
// const counterinterval = setInterval(() => {
//     counterp.innerHTML = count--
// console.log(count --);
// if (count==0)  {
//     clearInterval (counterinterval);
// }
// },1000);
// /
// const getadmin = document.querySelector("#getadmin")
// const deleteadmin = document.querySelector("#deleteadmin")

// setasadmin.onclick = () => {
//     localStorage.setItem("admin",1);
// };

// setasuser.onclick = () => {
//     localStorage.setItem("admin",0);
// };


// getadmin.onclick = () => {
//  console.log
//     (localStorage.getItem("admin",1));
// };


// deleteadmin.onclick = () => {
//     localStorage.removeItem("admin");
// };


// const obj1 = {
//     firstname:"khaled",
//     lastname:"mostafa",
//     age:20,
// };

// const obj2 = {
// degrees:[20,30,40,50],
// totalscore:1200,
// ispassed:true,
// };




// const stdata = {...obj1.age,...obj2};
// console.log(stdata);



// const sumtwonumber = function (num1,num2) {
//     return num1 + num2 ;
// };

// const sumarrow = (num1,num2) => num1 + num2 
// console.log(sumarrow(2,3));
