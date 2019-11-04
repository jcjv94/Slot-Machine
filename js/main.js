// create slots- slot1, slot2, slot3
const seven = new Image();
const lemon = new Image();
const cherry = new Image();
const orange = new Image();

seven.src = "Images/Slot image/seven.png";
lemon.src = "Images/Slot image/lemon.png";
cherry.src = "Images/Slot image/cherry.png";
orange.src = "Images/Slot image/orange.png";



let slot1 = [seven, lemon, cherry, orange]
let slot2 = [seven, lemon, cherry, orange]]◊
let slot3 = [seven, lemon, cherry, orange]]


// randomize slot1
let showSlot1 = slot1[Math.floor(Math.random() * slot1.length)];
// console.log(showSlot1)

document.getElementById('slt1').innerText = showSlot1

// randomize slot 2
let showSlot2 = slot2[Math.floor(Math.random() * slot2.length)];
// console.log(showSlot2)
document.getElementById('slt2').innerText = showSlot2

// randomize slot3
let showSlot3 = slot3[Math.floor(Math.random() * slot3.length)];
// console.log(showSlot3)
document.getElementById('slt3').innerText = showSlot3


// document.querySelectorAll('button').addEventListener('click', init);
// document.querySelectorAll('.allSlots').addEventListener('click', spin);


// function init() {
//     spin = 
//     winner = null;
//     render();
//   }

  

let results = document.getElementById('result');

function winner() {
    if ((showSlot1 === showSlot2) && (showSlot2 === showSlot3) && (showSlot3 === showSlot1)) {
        results.textContent = "You Win!";
    } else {
        results.textContent = "You Lose";
        }
}

winner();

// initialize null- empty slots, no one has pushed the button (or lever) 

// define winning combinations

// create button to spin the slots.

// when buttons is push button to randomize slots (spinning effect on images)

// have the 3 slots stop spinning one after another.

// if you get 3 of the same picture player wins- possibly add audio when a player hits the jackpot- possibly add point system, in order o gain credits to spin again

// if you don’t get 3 of the same picture, you lose. Spin again option


// var rotate = false;
// var circles = document.querySelectorAll('.circle');
// var message = document.querySelectorAll('.msg');

/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/