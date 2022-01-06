//script for calculator app

let display = document.querySelector('#display');

let first_num = 0;
let second_num = 0;
let active_operator = 'null';

//add event listeners to all buttons

//digits
//select all buttons
//iterate over node list adding event listeners

const createEventListeners = () => {

    //digit buttons event listeners
    let digit_buttons = document.querySelectorAll('.digit_btn');
    digit_buttons.forEach(button => button.addEventListener('click', () => display.innerText = display.innerText + button.innerText))

    //clear button event listener
    let clear_button = document.querySelector('#clear_button');
    clear_button.addEventListener('click', () => display.innerText = "");

    //add button event listener
    let add_button = document.querySelector('#add_button');
    add_button.addEventListener('click', () => {
        first_num = display.innerText;
        active_operator = 'add';
    })

    //subtract button event listener
    let subtract_button = document.querySelector('#subtract_button');
    subtract_button.addEventListener('click', () => {
        first_num = display.innerText;
        active_operator = 'subtract';
    })

    //multiply button event listener
    let multiply_button = document.querySelector('#multiply_button');
    multiply_button.addEventListener('click', () => {
        first_num = display.innerText;
        active_operator = 'multiply';
    })

    //divide button event listener
    let divide_button = document.querySelector('#divide_button');
    divide_button.addEventListener('click', () => {
        first_num = display.innerText;
        active_operator = 'divide';
    })

    //equals button event listener
    let equals_button = document.querySelector('#equals_button');
    equals_button.addEventListener('click', () => {
        second_num = display.innerText;
        display.innerText = arithmetic[active_operator](first_num, second_num);
    })

}

//define arithmetic functions
let arithmetic ={
    add: (a,b) => Number(a) + Number(b),
    subtract: (a,b) => Number(a)-Number(b),
    multiply: (a,b) => Number(a)*Number(b),
    divide: (a,b) => Number(a)/Number(b)
}

// let add = (a, b) => {
//     return a + b;
// }

// let subtract = (a, b) => {
//     return a - b;
// }

// let multiply = (a, b) => {
//     return a * b;
// }

// let divide = (a, b) => {
//     return a / b;
// }

createEventListeners();
//digit buttons should show in display when pressed
//operator buttons should take action when pressed
