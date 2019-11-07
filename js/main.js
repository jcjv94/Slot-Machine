// create slots- slot1, slot2, slot3

/*----- constants -----*/

//all characters/images
const AllTypes = ["seven", "lemon", "cherry", "orange", "bar", "grape", "banana", "watermelon"]

//all slot options linking to the variable above so each slot has the specific variables
let slot1 = AllTypes;
let slot2 = AllTypes;
let slot3 = AllTypes;

//game over is initially false until endGame function is envoked
let isGameOver = false;

// point system for each character image

const points2x = {
    seven: 75,
    lemon: 25,
    cherry: 40,
    orange: 15,
    bar: 5,
    grape: 10,
    banana: 1,
    watermelon: 100
};

const points3x = {
    seven: 150,
    lemon: 50,
    cherry: 80,
    orange: 30,
    bar: 10,
    grape: 20,
    banana: 10000,
    watermelon: 200
};

// balance on html starts you at $100, but is switched with cash varible to display live time balance upon spins
let cash = 0;

//if you don't match a pair or 3 of a kind each spin costs $25 
const bet = 25;

/*----- app's state (variables) -----*/

//showSlots referenced in spin & winner functions to reference the slots once they're filled with the images

let showSlot1, showSlot2, showSlot3;

/*----- cached element references -----*/

//referenced these variables to call the query selector for each slot class to display the image 

let img1 = document.querySelector('#slt1');
let img2 = document.querySelector('#slt2');
let img3 = document.querySelector('#slt3');

//referenced this variable to call the results ID to display the results on each spin

let results = document.getElementById('result');

//referenced this variable to call the spinner ID that is connected to the spin button
let spinner = document.getElementById('spinner');

/*----- event listeners -----*/

//event listener on the spin button waiting for the click event to take place

document.getElementById('spinner').addEventListener('click', function () {
    /*----- functions -----*/

    //once the function above takes place, it calls the init function to set the initial images to none
    if (isGameOver) {
        init();
    }
    img1.style.animationName = 'none';
    img2.style.animationName = 'none';
    img3.style.animationName = 'none';
    img1.textContent = '';
    img2.textContent = '';
    img3.textContent = '';
    // setTimeout function is called on the click of the spinner to animate each slot and set the time amount
    setTimeout(function () {
        spin()
        img1.style.animationName = 'ring1';
        img2.style.animationName = 'ring1';
        img3.style.animationName = 'ring1';

    }, 100);
});


//upon the click of the spinner, spin function is envoked using setTime out to randomize the images within each slot

function spin() {
    // randomize slot1
    showSlot1 = AllTypes[Math.floor(Math.random() * slot1.length)];
    showSlot2 = AllTypes[Math.floor(Math.random() * slot1.length)];
    showSlot3 = AllTypes[Math.floor(Math.random() * slot1.length)];

    document.getElementById('slt1').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot_image/${showSlot1}.png" alt=""></img>`
    document.getElementById('slt2').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot_image/${showSlot2}.png" alt=""></img>`
    document.getElementById('slt3').innerHTML = `<img src="https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot_image/${showSlot3}.png" alt=""></img>`

    ////////////////////////////////

    //x is the amount of rotations through each array of characters
    let x = 1

    //id is the amount of time each interval(roation) is set to each frame when displayed

    var id = setInterval(frame, 400);

    // frame function adjusts the rotations and invertals to display the random images on each spin so that it isn't just 1 image the entire time
    function frame() {
        if (x == 7) {
            clearInterval(id);
            //once the roations hits 7, interval stops and displays final image, else keep randomizing
        } else {
            x++;
            let firstSlot = document.getElementById('slt1')
            let randomNumber1 = Math.floor(Math.random() * AllTypes.length)
            firstSlot.children[0].src = `https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot_image/${AllTypes[randomNumber1]}.png`

            let secondSlot = document.getElementById('slt2')
            let randomNumber2 = Math.floor(Math.random() * AllTypes.length)
            secondSlot.children[0].src = `https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot_image/${AllTypes[randomNumber2]}.png`

            let thirdSlot = document.getElementById('slt3')
            let randomNumber3 = Math.floor(Math.random() * AllTypes.length)
            thirdSlot.children[0].src = `https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot_image/${AllTypes[randomNumber3]}.png`
            // displays random image from array length to determine which image is shown in each slot
            showSlot1 = AllTypes[randomNumber1]
            showSlot2 = AllTypes[randomNumber2]
            showSlot3 = AllTypes[randomNumber3]

        }
    }

    ////////////////////////////////

    //results display spinning until the timer hits 4 seconds (on last slot spin) where winner or endgame function in envoked

    results.textContent = "Spinning....";
    setTimeout(function () {
        winner();
        endGame();
    }, 4000)
}

//winner function determines money balance, big win, small win, or spin again

function winner() {

    if ((showSlot1 === showSlot2) && (showSlot2 === showSlot3)) {
        results.textContent = "Big Win!";
        cash += points3x[showSlot1]
        document.getElementById('balance').textContent = "Balance: $" + cash;
    } else if ((showSlot1 === showSlot2) || (showSlot2 === showSlot3) || (showSlot3 === showSlot1)) {
        results.textContent = "Small Win!";
        if (showSlot1 == showSlot2) {
            cash += points2x[showSlot1]
        } else if (showSlot2 == showSlot3) {
            cash += points2x[showSlot2]
        } else {
            cash += points2x[showSlot1]
        }
        document.getElementById('balance').textContent = "Balance: $" + cash;
    } else if ((showSlot1 !== showSlot2) || (showSlot2 !== showSlot3) || (showSlot3 !== showSlot1)) {
        results.textContent = "No Match. Spin Again!";
        cash -= bet
        document.getElementById('balance').textContent = "Balance: $" + cash;
    }
}

//end game function determines when the cash amount you have left in your balance is less than the bet amount, to end the game
function endGame() {
    while (cash < 25) {
        results.textContent = "Game Over!";
        document.getElementById('balance').textContent = "Balance: $" + cash;
        spinner.innerText = "Reset";
        isGameOver = true;
        return;
    }
}

//initialize function setting the balance, and letting the game know that it is not over yet

function init() {
    cash = 100;
    document.getElementById('balance').textContent = "Balance: $" + cash;
    spinner.innerText = "Spin";
    isGameOver = false;
}

init();