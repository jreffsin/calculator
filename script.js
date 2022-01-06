//script for calculator app

//still need to fix some of the bugs for how it handles unexpected presses of operators
//also handle how it handles someone pressing 0 when the display's already at 0
//also handle sign change when display is empty (it creates a 0)

let display = document.querySelector('#display');

let first_num = null;
let second_num = null;
let active_operator = null;
let clear_disp_on_next = false;
let last_op_was_equals = false;

//add event listeners to all buttons
const createEventListeners = () => {

    //digit buttons event listeners
    let digit_buttons = document.querySelectorAll('.digit_btn');
    digit_buttons.forEach(button => button.addEventListener('click', () => {
        if (clear_disp_on_next){
            display.innerText = '';
            clear_disp_on_next = false;
        }
        display.innerText = display.innerText + button.innerText;
    }))

    //clear button event listener
    let clear_button = document.querySelector('#clear_button');
    clear_button.addEventListener('click', () => {
        display.innerText = "";
        first_num = null;
        second_num = null;
        active_operator = null;
        clear_disp_on_next = false;
        last_op_was_equals = false;
    });

    //sign change button event listener
    let sign_change_button = document.querySelector('#sign_change_button');
    sign_change_button.addEventListener('click', () => display.innerText = 0 - Number(display.innerText));

    //percent button event listener
    let percent_button = document.querySelector('#percent_button');
    percent_button.addEventListener('click', () => display.innerText = Number(display.innerText) / 100);

    //decimal button event listener
    let decimal_button = document.querySelector('#decimal_button');
    decimal_button.addEventListener('click', () => {
        if (display.innerText.includes('.')){
            return;
        }
        display.innerText = display.innerText + '.';
    })

    //add button event listener
    let add_button = document.querySelector('#add_button');
    add_button.addEventListener('click', () => {
        if (first_num) {
            second_num = display.innerText;
            display.innerText = arithmetic[active_operator](first_num, second_num);
            clear_disp_on_next = true;
        }

        first_num = display.innerText;
        active_operator = 'add';
        clear_disp_on_next = true;
        last_op_was_equals = false;

        //if someone is in the middle of evaluating an expression, then
    })

    //subtract button event listener
    let subtract_button = document.querySelector('#subtract_button');
    subtract_button.addEventListener('click', () => {
        if (first_num) {
            second_num = display.innerText;
            display.innerText = arithmetic[active_operator](first_num, second_num);
            clear_disp_on_next = true;
        }

        first_num = display.innerText;
        active_operator = 'subtract';
        clear_disp_on_next = true;
        last_op_was_equals = false;
    })

    //multiply button event listener
    let multiply_button = document.querySelector('#multiply_button');
    multiply_button.addEventListener('click', () => {
        if (first_num) {
            second_num = display.innerText;
            display.innerText = arithmetic[active_operator](first_num, second_num);
            clear_disp_on_next = true;
        }

        first_num = display.innerText;
        active_operator = 'multiply';
        clear_disp_on_next = true;
        last_op_was_equals = false;
    })

    //divide button event listener
    let divide_button = document.querySelector('#divide_button');
    divide_button.addEventListener('click', () => {
        if (first_num) {
            second_num = display.innerText;
            display.innerText = arithmetic[active_operator](first_num, second_num);
            clear_disp_on_next = true;
        }

        first_num = display.innerText;
        active_operator = 'divide';
        clear_disp_on_next = true;
        last_op_was_equals = false;
    })

    //equals button event listener
    let equals_button = document.querySelector('#equals_button');
    equals_button.addEventListener('click', () => {
        if (!first_num && !second_num){
            return;
        } else if (last_op_was_equals){
            first_num = display.innerText
            display.innerText = arithmetic[active_operator](first_num, second_num);
            clear_disp_on_next = true;
            first_num = null;
            last_op_was_equals = true;
        } else {
            second_num = display.innerText;
            display.innerText = arithmetic[active_operator](first_num, second_num);
            clear_disp_on_next = true;
            first_num = null;
            last_op_was_equals = true;
        }
    })


}

//define arithmetic functions in object
let arithmetic = {
    add: (a,b) => Number(a) + Number(b),
    subtract: (a,b) => Number(a) - Number(b),
    multiply: (a,b) => Number(a) * Number(b),
    divide: (a,b) => Number(a) / Number(b)
}


createEventListeners();
