const input = document.getElementById('text_input');
   
input.value = "";

const numbers = document.getElementsByClassName('numbers')[0];
console.log(numbers);

const operations = document.getElementsByClassName('operations')[0];
console.log(operations);


function addNumber(e){
    let number = e.target.value
    if (number != undefined) {
        console.log(number);
        input.value = input.value + number;
    }
}
numbers.addEventListener('click', (e) => addNumber(e));

function addOperation(e){
    let operation = e.target.textContent
    console.log(operation);
    input.value = input.value + operation;
}
operations.addEventListener('click', (e) => addOperation(e));