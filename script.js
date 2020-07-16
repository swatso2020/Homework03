
//function to get random number
var number =[0,1,2,3,4,5,6,7,8,9];
var char =["!","@","#","$","%","^","&","*"];
var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arraylist =[number,char,upperCase,lowerCase]
//simulating user input
var userNum = 1;
var userSpec = 1;
var userUpper = 1;
var userLower = 1;



var generateBtn = document.querySelector("#generate");


function passwordGenerator(){
   
var password =[]//stores results from for loop
 var randomNumber ='';//variable to store the random number operaton
//for loop will 

      for(var i=0; i<8;i++){
         if(userNum==1){ 
              randomNumber =Math.floor(Math.random()*arraylist[0].length)
               password.push(arraylist[0][randomNumber]);
               console.log("inside for loop" + arraylist[0][randomNumber])
              }
              if(userSpec==1){
          
              randomNumber =Math.floor(Math.random()*arraylist[1].length)
               password.push(arraylist[1][randomNumber]);
               console.log("inside for loop" + arraylist[1][randomNumber])
               }

            if(userUpper==1){
          randomNumber =Math.floor(Math.random()*arraylist[2].length)
           password.push(arraylist[2][randomNumber]);
           console.log("inside for loop" + arraylist[2][randomNumber])
           }
           if(userLower==1){
          randomNumber =Math.floor(Math.random()*arraylist[3].length)
           password.push(arraylist[3][randomNumber]);
           console.log("inside for loop" + arraylist[3][randomNumber])
           }
      
      } 
      document.getElementById('password').value =password.join('')     



}


//generateBtn.addEventListener("click", writePassword);