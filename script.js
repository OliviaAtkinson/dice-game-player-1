var score = 0;
//variable to hold the score number.
let dice = [
    {face: 1, img:"img/dice1.png"},
    {face: 2, img:"img/dice2.png"},
    {face: 3, img:"img/dice3.png"},
    {face: 4, img:"img/dice4.png"},
    {face: 5, img:"img/dice5.png"},
    {face: 6, img:"img/dice6.png"}
]
//variable that holds the dice images in an array.


function rollDice (){
//function to roll the dice
    let randomNum = Math.floor(Math.random() * 6) + 1 ;
    //varible that contains the math equation, to choose a random number between 1 and 6.
    let outcome = checkOutcome(randomNum);
    //variable contaning the function of checking the outcome.
    //allowing the function to be passed through another function and to be used under a new variable name.
    let image = getImage(randomNum);
    //variable containing the function of getting the image.
    //allowing the function to be passed through another function and to be used under a new variable name.
    let imgElement = document.getElementById("img");
    //variable allowing the id to be passed through from the html.
    
    imgElement.src = image;
    //the variable imgElement is set to the src img, this line is being made to equal to the image variable which contains the random image selection.
    score += randomNum ;
    //this line is a small equation to make the score add on the random number chosen.

    if (outcome == "Loser!"){
    //when the outcome == loser do this.
        addHtml("outcome", "Loser!")
        //addHtml allows data to be replaced in the html.
    }else if(outcome == "Winner!"){
    //if the first condition isnt met then else if will continue the statement.
        addHtml("outcome", "Winner!")
        //addHtml allows data to be replaced in the html.
    };
    addHtml("playerScore", "Player Score: " + score);
    //the information inside the first quotes is the id that we are targeting, and then after the comma is the value that we are changing. 
    //addhtml here lets the score be added onto the end of player score.
}

function checkOutcome (randomNum){
//new function checks the outcome if the user won or not.
    if (randomNum== 1) {
        return "Loser!"
        //if the randomNum ends up being equal to 1 then the user is returned loser.
    }else if(score >= 20) {
        return "Winner!"
        //if the if statement is not true then the calculations will carry on until the user has won, at anytime the number 1 can be randomly chosen cauing the user to lose.
    }
}

function getImage (randomNum){
//function of getting the image by random. we have passed the randomNum function into this function because it is using the random equaion.
    for(let diceFace of dice) {
    //for every dice face rolled of the variable dice which contains all the images, every face is randomly picked.
        if (diceFace.face == randomNum){
            return diceFace.img;
            //when a random number is picked, the array of images show the related image, for example, random number is 1 and the face 1 of dice images is shown.
        }
    }
}

function addHtml (id, value){
//function to create a shortcut for inserting ids and values from the html. everytime where i have to insert a value to change the html i can use this function, by calling it in other functions.
    document.getElementById(id).innerHTML= value;
    //i am going to the html to gather all ids and values so i will be able to use and make changes.
}

function reset(){
//after rolling the dice i need to reset nearly everything.
    score = 0;
    //reseting the score to 0, from the previous score.
    let imgElement = document.getElementById("img");
    imgElement.src= "";
    //pulling the image element into this function and i have changed the output image to nothing.
    addHtml("playerScore", "Player Score: ");
    outcome.innerHTML= '';
    //addhtml function is used because i need to replace data and use the id, i have replaced the outcome to nothing aswell.
}