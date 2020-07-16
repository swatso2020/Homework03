
//function to get random number
var number =[0,1,2,3,4,5,6,7,8,9];
var char =["!","@","#","$","%","^","&","*"];
var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arraylist =[number,char,upperCase,lowerCase]
//simulating user input
var userNum = confirm("would you like your password to contain numbers?");
var userSpec = confirm("would you like your password to contain special characters?");
var userUpper = confirm("whould you like your password to contain uppercase characters?");
var userLower = confirm("would you like your password to contain lowercase letters")
var userSelLength = prompt("choose the length of your characters. Must be 8 - 128 characters long");

if(userSelLength <8 || userSelLength>128){
      alert("password out of bounds. Please refresh ran and try agian")

}

var generateBtn = document.querySelector("#generate");


function passwordGenerator(){
   
var password =[]//stores results from for loop
 var randomNumber ='';//variable to store the random number operaton
//for loop will 

      for(var i=0; i<8;i++){
         if(userNum){ 
              randomNumber =Math.floor(Math.random()*arraylist[0].length)
               password.push(arraylist[0][randomNumber]);
              }
              if(userSpec){
          
              randomNumber =Math.floor(Math.random()*arraylist[1].length)
               password.push(arraylist[1][randomNumber]);
               }

            if(userUpper){
          randomNumber =Math.floor(Math.random()*arraylist[2].length)
           password.push(arraylist[2][randomNumber]);
           }
           if(userLower){
          randomNumber =Math.floor(Math.random()*arraylist[3].length)
           password.push(arraylist[3][randomNumber]);
           }

           pwd = password.slice(0,userSelLength)
      
      } 
      document.getElementById('password').value =pwd.join('')     



}
