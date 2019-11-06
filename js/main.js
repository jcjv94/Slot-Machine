// create slots- slot1, slot2, slot3

/*----- constants -----*/

let slot1 = ["seven", "lemon", "cherry", "orange", "bar", "grape", "banana", "watermelon"]
let slot2 = ["seven", "lemon", "cherry", "orange", "bar", "grape", "banana", "watermelon"]
let slot3 = ["seven", "lemon", "cherry", "orange", "bar", "grape", "banana", "watermelon"]

let cash = 100;
var bet = 20;

// var remainingCash = cash - bet;
// let wallet = document.querySelector('#balance') + '' + remainingCash;

// let imageEndPoint = `https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/`

/*----- app's state (variables) -----*/
/*----- cached element references -----*/

let showSlot1, showSlot2, showSlot3;

/*----- event listeners -----*/

document.querySelector('button').addEventListener('click', spin);


/*----- functions -----*/

function spin() {
    // randomize slot1
    showSlot1 = slot1[Math.floor(Math.random() * slot1.length)];
    // console.log(showSlot1)

    // document.getElementById('slt1').innerText = showSlot1

    document.getElementById('slt1').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/${showSlot1}.png" alt=""></img>`

    // randomize slot 2
    showSlot2 = slot2[Math.floor(Math.random() * slot2.length)];
    // console.log(showSlot2)
    document.getElementById('slt2').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/${showSlot2}.png" alt=""></img>`
    // randomize slot3
    showSlot3 = slot3[Math.floor(Math.random() * slot3.length)];
    // console.log(showSlot3)
    document.getElementById('slt3').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/${showSlot3}.png" alt=""></img>`
    results.textContent = "Spinning....";
    setTimeout(function () {

        winner();
    }, 4000)
}


let img1 = document.querySelector('#slt1');
let img2 = document.querySelector('#slt2');
let img3 = document.querySelector('#slt3');

document.getElementById('spinner').addEventListener('click', function () {
    img1.style.animationName = 'none';
    img2.style.animationName = 'none';
    img3.style.animationName = 'none';
    img1.textContent = '';
    img2.textContent = '';
    img3.textContent = '';
    setTimeout(function () {
        // note that you only need a single animation
        spin()
        // setTimeout(function() {
        img1.style.animationName = 'ring1';
        img2.style.animationName = 'ring1';
        img3.style.animationName = 'ring1';

    }, 100);
});


let results = document.getElementById('result');

function winner() {
    if ((showSlot1 === showSlot2) && (showSlot2 === showSlot3) && (showSlot3 === showSlot1)) {
        results.textContent = "You Win!";
        cash += bet
        document.getElementById('balance').textContent = "Balance: $" + cash;
        // console.log(remainingCash);
    } else {
        results.textContent = "You Lose. Spin Again!";
        cash -= bet
        document.getElementById('balance').textContent = "Balance: $" + cash;
    }
}

// function wallet() {
//     if (results.textContent ==== "You Win!") {
//         var total = document.getElementById('.balance')
//     }
//     else
//     var total = document.getElementById('.balance')
// }