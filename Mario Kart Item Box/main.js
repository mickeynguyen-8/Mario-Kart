//Mario Kart Item Box Stimulator
'use strict'

//Global Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0 ;
let numBulletBill = 0;

let resultsEl = document.getElementById('results');

//Event Listener
document.getElementById('mainImg').addEventListener('click', collectItem);
document.getElementById('run5times').addEventListener('click', Run5times);
document.getElementById('10bullet').addEventListener('click', Total10bullet);
document.getElementById('RunN').addEventListener('click', enterNumber);

//Event Function
function collectItem() {
    //Stimulate the result of getting one item

    //Get racer position
    let position = Number(document.getElementById('position').value);

    //Stimulate results for based on racer position
    if (position >= 1 && position <=6) {
        //Banana = 25%, Green Shell = 25%, Star = 15%, Golden Mushroom = 15%, Bullet Bill = 20%

        //Generate a random number
        simulate1to6();
    }

    else if (position >= 7 && position <=12) {
        simulate7to12();
        //Generate a random number
        
    }
    else {
        alert('Please give Mario a number');
    }
}
// Helper functions
function simulate1to6(){
    let randNum = Math.random(); //Random decimal from 0 up to 1

    if (randNum < 0.45) {
        //Banana
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
        resultsEl.innerHTML += '<img src="images/Banana.png" width= "50px" height="50px">';
           

    }
    else if (randNum < 0.80 ) {
        //Green Shell
        numGreenShell++;
        document.getElementById('greenshell').innerHTML = numGreenShell;
        resultsEl.innerHTML += '<img src="images/green-shell.png" width= "50px" height="50px">';
    }
    else if (randNum < 0.95){
        //Star
        numStar++;
        numGoldenMushroom++;
        document.getElementById('star').innerHTML = numStar;
        resultsEl.innerHTML += '<img src="images/Star.png" width= "50px" height="50px">';
    }
    else if (randNum < 0.99) {
        //Golden Mushroom
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        resultsEl.innerHTML += '<img src="images/GoldenMushroom.png" width= "50px" height="50px">';
    }
    else {
        //Bullet Bill
        numBulletBill++;
        resultsEl.innerHTML += '<img src="images/Bullet.png" width= "50px" height="50px">';
    }
}
function simulate7to12(){
    let randNum1 = Math.random(); //Random decimal from 0 to 1

    if (randNum1 <0.05) {
        //Banana
        numBanana++;
        document.getElementById('banana').innerHTML = numBanana;
        resultsEl.innerHTML += '<img src="images/Banana.png" width= "50px" height="50px">';
    }
    else if (randNum1 < 0.1){
        //Green Shell
        numGreenShell++;
        document.getElementById('greenshell').innerHTML =numGreenShell;
        resultsEl.innerHTML += '<img src="images/green-shell.png" width= "50px" height="50px">';
    }
    else if (randNum1 < 0.35){
        //Star
        numStar++;
        document.getElementById('star').innerHTML = numStar;
        resultsEl.innerHTML += '<img src="images/Star.png" width= "50px" height="50px">';
    }
    else if (randNum1 < 0.75){
        //Golden Mushroom
        numGoldenMushroom++;
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        resultsEl.innerHTML += '<img src="images/GoldenMushroom.png" width= "50px" height="50px" >';
    }
    else {
        //Bullet head
        numBulletBill++;
        document.getElementById('bullet').innerHTML = numBulletBill;
        resultsEl.innerHTML += '<img src="images/Bullet.png" width= "50px black" height="50px">';
    }
}

function Total10bullet() {
    let count = 0
    while (numBulletBill < 10){
        collectItem();
        count++;
    }
    
}


// put this into an event function 
function Run5times(){
    for(let i=0 ; i < 5; i++){
        // do these things 5 times
        collectItem();
    }
}


function enterNumber() {
    let boxNumber = Number(document.getElementById('results1').value);
    for (let n = 0; n < boxNumber; n++){
        collectItem();
    }
}