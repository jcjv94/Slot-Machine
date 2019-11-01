// create slots- slot1, slot2, slot3
let slot1 = ["star","jackpot","cherry","orange"]
let slot2 = ["star","jackpot","cherry","orange"]
let slot3 = ["star","jackpot","cherry","orange"]

// randomize slot1
let showSlot1 = slot1[Math.floor(Math.random()* slot1.length)];
// console.log(showSlot1)

document.getElementById('slt1').innerText = showSlot1

// randomize slot 2
let showSlot2 = slot2[Math.floor(Math.random()* slot2.length)];
// console.log(showSlot2)
document.getElementById('slt2').innerText = showSlot2

// randomize slot3
let showSlot3 = slot3[Math.floor(Math.random()* slot3.length)];
// console.log(showSlot3)
document.getElementById('slt3').innerText = showSlot3


// initialize null- empty slots, no one has pushed the button (or lever) 

// define winning combinations

// create button to spin the slots.

// when buttons is push button to randomize slots (spinning effect on images)

// have the 3 slots stop spinning one after another.

// if you get 3 of the same picture player wins- possibly add audio when a player hits the jackpot- possibly add point system, in order o gain credits to spin again

// if you don’t get 3 of the same picture, you lose. Spin again option


// var slots;
// var winner;

// function getWinner() {
//     if (Math.abs(slots[0] + slots[0] + slots[0]) === 3) return slots[0];
//     if (Math.abs(slots[1] + slots[1] + slots[1]) === 3) return slots[3];
//     if (Math.abs(slots[2] + slots[2] + slots[2]) === 3) return slots[6];
//     if (Math.abs(slots[3] + slots[3] + slots[3]) === 3) return slots[2];
//     if (board.includes(null)) return null;
//     return 'T';
//   }

// var winCombos = [
//     [0 , 0, 0]
//     [1, 1, 1]
//     [2, 2, 2]
//     [3, 3, 3]
// ];



// var rotate = false;
// var circles = document.querySelectorAll('.circle');
// var message = document.querySelectorAll('.msg');

// document.querySelectorAll('button').addEventListener('click', init);
// document.querySelectorAll('.allSlots').addEventListener('click', spin);

/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
