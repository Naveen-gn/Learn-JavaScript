//! Code of job Qualification using radio button & js

// const btn = document.querySelector('button');
// btn.addEventListener('click', fun)
// function fun() {
//     const radioButtons = document.getElementsByName('qual');
//     let selectedQualification = '';

//     for (let i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) {
//             selectedQualification = radioButtons[i].value;
//             break;
//         }
//     }
//     const answerElement = document.getElementById('ans');
//     switch (selectedQualification) {
//         case 'Illiterate':
//             answerElement.textContent = 'You are Not Qualified for job';
//             break;
//         case 'High School':
//             answerElement.textContent = 'You are Not Qualified for job';
//             break;
//         case 'UG':
//             answerElement.textContent = 'You are Qualified for job';
//             break;
//         case 'PG':
//             answerElement.textContent = 'You are Qualified for job';
//             break;
//         case 'Doctorate':
//             answerElement.textContent = 'You are Qualified for job';
//             break;
//         default:
//             answerElement.textContent = 'Please select a qualification.';
//             break;
//     }
// }



//!  javascript for show the details for each value using switch statement

// let selval=document.querySelector('button')
// selval.addEventListener('click',disdet)
// function disdet(){
//     let input1=document.getElementById("input1")
//     let city=input1.value;
//     let input2=document.getElementById("result")
  
//     switch (city){
//         case "Chennai":
//         input2.innerHTML="The Selected city is chennai"
//         break;
//         case "Mumbai":
//         input2.innerHTML="The Selected city is Mumbai"
//         break;
//         case "Delhi":
//         input2.innerHTML="The Selected city is Delhi"
//         break;
//         default:
//         input2.innerHTML="Select the city first"
//     }
    

// }

//! script code for calculator using js

// const calBtn = document.querySelector('button');
// calBtn.addEventListener('click', calculate);

// function calculate() {
//     const operand1 = Number(document.getElementById('operandinput1').value);
//     const operand2 = Number(document.getElementById('operandinput2').value);
//     const operator = document.getElementById('sylinput').value;
//     let result;
//     switch (operator) {
//         case 'add':
//             result = operand1 + operand2;
//             break;
//         case 'sub':
//             result = operand1 - operand2;
//             break;
//         case 'mul':
//             result = operand1 * operand2;
//             break;
//         case 'div':
//             result = operand1 / operand2;
//             break;
//         default:
//             result = 'Invalid operator';
//     }
//     document.getElementById('result').textContent = `Result: ${result}`;
// }




//! Code for password validation using js

//      function getValue() {
//    var inputValue =document.getElementById("myInput").value;
//    if(inputValue==12345678)
//    {
//      alert("Access granted")
//    }
//    else{
//      alert("Access Denied")
//    }
//    console.log(inputValue);
//  }


//! Code For Pick a random letter in the string

// const name="AunKuma-Topper"
// let len=name.length
// let rand= Math.random()*len
// console.log("The Original name:"+name)
// let rand_letter=name.charAt(rand)
// console.log(rand_letter)
 
//! Code for Template literals

// let name1="Mukesh"
// let name2="Arun kumar"
// console.log(name1+" and "+name2+" are toppers")
// console.log(`${name1} and ${name2} are toppers`)
// let itemCount=5;
// let total=95;
// let msg=`"You have ${itemCount} items in your cart. \n Your bill amount is $${total}"`
// console.log(msg)


//! Arrays

//! Code for find a last element in a array

// let arr1=["Mukesh","arun","gold"]
// let arr2=[1,2,3,4,5,5,4,3,2,1]
// let len1=arr1.length
// let len2 =arr2.length
// console.log(arr1[len1-1])
// console.log(arr2[len2-1])

//! Code for  array pop operation

// let arr2d=[[1,2],[4,5,6],[7,8,9]];
// console.log(arr2d)
// arr2d.pop()
// console.log(arr2d)

//! Code for array splitting & array joining

// let arr=[1,2,3,4,5,6]
// let arrstr=arr.join()
// console.log(arrstr)
// let arrstr="1234"
// let arr2=arrstr.split('')
// console.log(arr2)


//! Code for Object
 
// let user={
//     name: 'John',
//     age: 36,
//     appear:{height:50,weight:100},
//     extras:["Eye color is black","Very tall"],
//     speak:function(){
//         console.log("My name is John")
//     }
// }

// console.log(user.name)
// console.log(user.age)
// console.log(user.appear.height)
// console.log(user.extras[0])
// user.speak()

//! code for "For" loop
// let i;
// for(i=0;i<=10;i++){
//     if(i%2===0)
//     continue
//     console.log(i);
// }
// for(i=10;i>=0;i--){
//     console.log(i);
// }

// let fruit=["apple","orange","mango"]
// for(let fruit1 of fruit){
//     console.log(fruit1)
// }

//! code for using a 'in' keyword in for loop
// let user={
//     name: 'John',
//     age: 36,
//     appear:{height:50,weight:100},
//     extras:["Eye color is black","Very tall"],
//     speak:function(){
//         console.log("My name is John")
//     }
// }
// for(let user1 in user){
//     console.log(user[user1])
// }

//! code for reverse a string using for loop
// let str="Arun is topper"
// console.log(`The original string: ${str}`)
// let arr =str.split(' ')
// let arr2=arr.reverse()
// for(let rev of arr2){
//     console.log(rev)
// }



//! code for while loop

// let i=0;
// while(i<=10){
//     i++;
//     console.log(i);
// }
// console.log(i);

//!  code for print a even number between 1 to 10 using while loop
// let number = 1;
// while (number <= 10) {
//   console.log(number); 
//   number += 2;
// }


//!code for functions

// function greet(name="User"){
//     return `Welcome ${name}`
// }
// console.log(greet())
// console.log( greet("Arun"))

//! code for check a number is positive or negative using function

// function checknum(num){
//     if(typeof num==="number"){
//         if(num<0)
//          return "Negative"
//         else if(num===0){
//             return "The Number is 0"
//         }
//         else
//           return "Possitive"
//     }
//     else
//      return "Enter the Number"

// }

// console.log( checknum(0))

//! code for find the sum of array using function
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=arr1.concat(arr2)
function sumarr(arr){
    let sum=0;
    if (typeof arr==="object"){
        for(let arrele of arr){
            sum = sum+arrele;
        }
        return sum
    }
    else {
        return "Invalid input"
    }
}

console.log(sumarr(arr3))