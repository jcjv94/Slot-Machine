// create slots- slot1, slot2, slot3
// const seven = img();
// const lemon = img();
// const cherry = img();
// const orange = img();

// seven.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/seven.png";
// lemon.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/lemon.png";
// cherry.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/cherry.png";
// orange.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/orange.png";



// let slot1 = [seven, lemon, cherry, orange]
// let slot2 = [seven, lemon, cherry, orange]
// let slot3 = [seven, lemon, cherry, orange]



let slot1 = ["Seven", "Lemon", "Cherry", "Orange"]
let slot2 = ["Seven", "Lemon", "Cherry", "Orange"]
let slot3 = ["Seven", "Lemon", "Cherry", "Orange"]

let showSlot1, showSlot2, showSlot3;

document.querySelector('button').addEventListener('click', spin);


function spin() {
    // randomize slot1
    showSlot1 = slot1[Math.floor(Math.random() * slot1.length)];
    // console.log(showSlot1)

    document.getElementById('slt1').innerText = showSlot1

    // randomize slot 2
    showSlot2 = slot2[Math.floor(Math.random() * slot2.length)];
    // console.log(showSlot2)
    document.getElementById('slt2').innerText = showSlot2

    // randomize slot3
    showSlot3 = slot3[Math.floor(Math.random() * slot3.length)];
    // console.log(showSlot3)
    document.getElementById('slt3').innerText = showSlot3

    winner();
}

let results = document.getElementById('result');

function winner() {
    if ((showSlot1 === showSlot2) && (showSlot2 === showSlot3) && (showSlot3 === showSlot1)) {
        results.textContent = "You Win!";
    } else {
        results.textContent = "You Lose";
    }
}



// document.querySelector('button').addEventListener('click', spin)
// document.querySelectorAll('.allSlots').addEventListener('click', spin);


// function init() {
//     spin = 
//     winner = null;
//     render();
//   }




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