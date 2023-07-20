
let button = document.querySelectorAll('button');
let input = document.querySelector('#input');
let subButton = document.querySelector('sub-btn');
let clearButton = document.querySelector('clearButton');


button.forEach((btn) => {

    btn.addEventListener('click', () => {

        input.value += btn.value;
    })

})
console.log(button)

subButton, addEventListener('click', () => {

    let screenvalue = input.value;
    let res = eval(screenvalue)

    input.value = res

})

clearButton.addEventListener('click', () => {

    input.value = "."

})