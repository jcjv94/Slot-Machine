// create slots- slot1, slot2, slot3
// const seven = document.getElementById(seven);
// const lemon = document.getElementById(lemon);
// const cherry = document.getElementById(cherry);
// const orange = document.getElementById(orange);

// seven.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/seven.png";
// lemon.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/lemon.png";
// cherry.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/cherry.png";
// orange.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/orange.png";



// let slot1 = [seven, lemon, cherry, orange]
// let slot2 = [seven, lemon, cherry, orange]
// let slot3 = [seven, lemon, cherry, orange]


// function slotImages() {
//     var img = document.createElement('img');
//     img.src = "https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/orange.png";
//     document.slot1.appendChild(img);
// }

/*----- constants -----*/

let slot1 = ["seven", "lemon", "cherry", "orange"]
let slot2 = ["seven", "lemon", "cherry", "orange"]
let slot3 = ["seven", "lemon", "cherry", "orange"]
// let imageEndPoint = `https://raw.githubusercontent.com/jcjv94/Slot-Machine/master/Images/Slot%20image/`

/*----- app's state (variables) -----*/ /*----- cached element references -----*/

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
    setTimeout(function(){

        winner();
    }, 4000)
}


let img1 = document.querySelector('#slt1'); 
let img2 = document.querySelector('#slt2'); 
let img3 = document.querySelector('#slt3'); 

document.getElementById('spinner').addEventListener('click',function(){
    console.log("HITTING")
    console.log(img1)
    img1.style.animationName = 'none';
    img2.style.animationName = 'none';
    img3.style.animationName = 'none';
    img1.textContent = '';
    img2.textContent = '';
    img3.textContent = '';
    setTimeout(function() {
      // note that you only need a single animation
      spin()
      // setTimeout(function() {
        img1.style.animationName = 'ring1';
        img2.style.animationName = 'ring1';
        img3.style.animationName = 'ring1';
        
        // 
      // }, 3200);
    }, 100);
  });



let results = document.getElementById('result');

function winner() {
    if ((showSlot1 === showSlot2) && (showSlot2 === showSlot3) && (showSlot3 === showSlot1)) {
        results.textContent = "You Win!";
    } else {
        results.textContent = "You Lose. Spin Again!";
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
