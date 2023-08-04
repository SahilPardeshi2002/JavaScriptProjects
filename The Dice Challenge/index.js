var randomVariable1 = Math.random() * 6 + 1;
var randomVariable1 = Math.floor(randomVariable1); 

var randomVariable2 = Math.random() * 6 + 1;
    randomVariable2 = Math.floor(randomVariable2);

var randomDiceImage1 = "dice"+randomVariable1+".png";
var randomDiceImage2 = "dice"+randomVariable2+".png";

var randomImageSource1 = "images/"+randomDiceImage1;
var randomImageSource2 = "images/"+randomDiceImage2;

var dice1 = document.querySelector(".Dice1 img");

dice1.setAttribute("src", randomImageSource1);

var dice2 = document.querySelector(".Dice2 img");

dice2.setAttribute("src",randomImageSource2);

// function changeImage1(){

//     if(roundOff === 1){
//         document.querySelector(".Dice1 img").setAttribute("src" , "images/dice1.png");
//     }else if(roundOff === 2){
//         document.querySelector(".Dice1 img").setAttribute("src" , "images/dice2.png");
//     }else if(roundOff === 3){
//         document.querySelector(".Dice1 img").setAttribute("src" , "images/dice3.png");
//     }else if(roundOff === 4){
//         document.querySelector(".Dice1 img").setAttribute("src" , "images/dice4.png");
//     }else if(roundOff === 5){
//         document.querySelector(".Dice1 img").setAttribute("src" , "images/dice5.png");
//     }else if (roundOff === 6){
//         document.querySelector(".Dice1 img").setAttribute("src" , "images/dice6.png");
//     }

// }



// function changeImage2(){

//     if(randomVariable2 === 1){
//         document.querySelector(".Dice2 img").setAttribute("src" , "images/dice1.png");
//     }else if(randomVariable2 === 2){
//         document.querySelector(".Dice2 img").setAttribute("src" , "images/dice2.png");
//     }else if(randomVariable2 === 3){
//         document.querySelector(".Dice2 img").setAttribute("src" , "images/dice3.png");
//     }else if(randomVariable2 === 4){
//         document.querySelector(".Dice2 img").setAttribute("src" , "images/dice4.png");
//     }else if(randomVariable2 === 5){
//         document.querySelector(".Dice2 img").setAttribute("src" , "images/dice5.png");
//     }else if (randomVariable2 === 6){
//         document.querySelector(".Dice2 img").setAttribute("src" , "images/dice6.png");
//     }

// }
// changeImage1(); 
// changeImage2();

if(randomVariable1 > randomVariable2){
    document.getElementById("heading").innerHTML = "Player 1 wins 🏆";
} else if(randomVariable1 === randomVariable2){
    document.getElementById("heading").innerHTML = "Draw!!!";
}else{
    document.getElementById("heading").innerHTML = "Player 2 wins 🏆";
}



