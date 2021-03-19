//  Import func
import { add, subtract, multiply, divide } from './utils.js';

//  Pull DOM elements
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const answer = document.getElementById('answer');
const dropdown = document.getElementById('dropdown');
// const clear = document.getElementById('clear');

// Creat funcs to export
export function handleClick() {
    if (dropdown.value === 'addition') {
        const value1 = Number(input1.value);
        const value2 = Number(input2.value);
        answer.textContent = add(value1, value2);
    } else if (dropdown.value === 'subtraction') {
        const value1 = Number(input1.value);
        const value2 = Number(input2.value);
        answer.textContent = subtract(value1, value2);
    } else if (dropdown.value === 'multiplication') {
        const value1 = Number(input1.value);
        const value2 = Number(input2.value);
        answer.textContent = multiply(value1, value2);
    } else if (dropdown.value === 'division') {
        const value1 = Number(input1.value);
        const value2 = Number(input2.value);
        answer.textContent = divide(value1, value2);
    }}

export function clearClick() {
    input1.value = '';
    input2.value = '';
    answer.textContent = '0';
}