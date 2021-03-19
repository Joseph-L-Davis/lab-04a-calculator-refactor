import { add, subtract, multiply, divide } from './utils.js';

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const answer = document.getElementById('answer');


export function handleAddClick() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    answer.textContent = add(value1, value2);
    console.log('add');
}
export function handleSubtractClick() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    answer.textContent = subtract(value1, value2);
    console.log('add');
}
export function handleMultiplyClick() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    answer.textContent = multiply(value1, value2);
    console.log('add');
}
export function handleDivideClick() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    answer.textContent = divide(value1, value2);
    console.log('add');
}

export function handleClearClick() {
    input1.value = '';
    input2.value = '';
    answer.textContent = '0';
}
