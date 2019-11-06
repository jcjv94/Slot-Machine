// create slots- slot1, slot2, slot3

/*----- constants -----*/
const AllTypes = ["seven", "lemon", "cherry", "orange", "bar", "grape", "banana", "watermelon"]

let slot1 = AllTypes;
let slot2 = AllTypes;
let slot3 = AllTypes;

let isGameOver = false;
// test point system

let points2x = {
    seven: 75,
    lemon: 25,
    cherry: 40,
    orange: 15,
    bar: 5,
    grape: 10,
    banana: 1,
    watermelon: 100
};

let points3x = {
    seven: 150,
    lemon: 50,
    cherry: 80,
    orange: 30,
    bar: 10,
    grape: 20,
    banana: 10000,
    watermelon: 200
};


let cash = 0;
const bet = 25;

/*----- app's state (variables) -----*/

let showSlot1, showSlot2, showSlot3;

/*----- cached element references -----*/

let img1 = document.querySelector('#slt1');
let img2 = document.querySelector('#slt2');
let img3 = document.querySelector('#slt3');

let results = document.getElementById('result');

/*----- event listeners -----*/
let spinner = document.getElementById('spinner');

document.getElementById('spinner').addEventListener('click', function () {

    if (isGameOver){ init(); }
    img1.style.animationName = 'none';
    img2.style.animationName = 'none';
    img3.style.animationName = 'none';
    img1.textContent = '';
    img2.textContent = '';
    img3.textContent = '';
    // setTimeout(function() {
    setTimeout(function () {
        spin()
        img1.style.animationName = 'ring1';
        img2.style.animationName = 'ring1';
        img3.style.animationName = 'ring1';

    }, 100);
});


/*----- functions -----*/

function spin() {
    // randomize slot1
    showSlot1 = AllTypes[Math.floor(Math.random() * slot1.length)];
    // console.log(showSlot1)

    // document.getElementById('slt1').innerText = showSlot1
    document.getElementById('slt1').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/${showSlot1}.png" alt=""></img>`

    // randomize slot 2
    showSlot2 = AllTypes[Math.floor(Math.random() * slot2.length)];
    // console.log(showSlot2)
    document.getElementById('slt2').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/${showSlot2}.png" alt=""></img>`
    // randomize slot3
    showSlot3 = AllTypes[Math.floor(Math.random() * slot3.length)];
    // console.log(showSlot3)
    document.getElementById('slt3').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/${showSlot3}.png" alt=""></img>`
    results.textContent = "Spinning....";
    setTimeout(function () {
        winner();
        endGame();
    }, 4000)
}

function winner() {

    if ((showSlot1 === showSlot2) && (showSlot2 === showSlot3)) {
        results.textContent = "Big Win!";
        cash += points3x[showSlot1]
        document.getElementById('balance').textContent = "Balance: $" + cash;
    }
    else if((showSlot1 === showSlot2) || (showSlot2 === showSlot3) || (showSlot3 === showSlot1)) {
        results.textContent = "Little Win!";
        if(showSlot1 == showSlot2){
            cash += points2x[showSlot1]
        } else if (showSlot2 == showSlot3) {
            cash += points2x[showSlot2]
        } else {         
            cash += points2x[showSlot1]
        }
        document.getElementById('balance').textContent = "Balance: $" + cash;
    }
    else if ((showSlot1 !== showSlot2) || (showSlot2 !== showSlot3) || (showSlot3 !== showSlot1)) {
        results.textContent = "You Lose. Spin Again!";
        cash -= bet
        document.getElementById('balance').textContent = "Balance: $" + cash;
    }
    // else {
    //     results.textContent = "Game Over!";
    //     cash < bet
    //     document.getElementById('balance').textContent = "Balance: $" + cash;
    // }
}

function endGame () {
    while (cash < 25){
        results.textContent = "Game Over!";
        document.getElementById('balance').textContent = "Balance: $" + cash;
        spinner.innerText = "Reset";
        isGameOver = true;
        return;
    }
}

//2x winner function

// function winner2x() {
//     if ((showSlot1 === showSlot2) || (showSlot2 === showSlot3) || (showSlot3 === showSlot1)) {
//         results.textContent = "You Win!";
//         cash += points2x
//         document.getElementById('balance').textContent = "Balance: $" + cash;
//     } else {
//         results.textContent = "You Lose. Spin Again!";
//         cash -= bet
//         document.getElementById('balance').textContent = "Balance: $" + cash;
//     }
// }

//3x winner function

// function winner3x() {
//     if ((showSlot1 === showSlot2) || (showSlot2 === showSlot3) || (showSlot3 === showSlot1)) {
//         results.textContent = "You Win!";
//         cash += points3x
//         document.getElementById('balance').textContent = "Balance: $" + cash;
//     } else {
//         results.textContent = "You Lose. Spin Again!";
//         cash -= bet
//         document.getElementById('balance').textContent = "Balance: $" + cash;
//     }
// }

function init(){
    cash = 100;
    document.getElementById('balance').textContent = "Balance: $" + cash;
    spinner.innerText = "Spin";
    isGameOver = false;
}

init();