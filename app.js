//  Import Funcs
import { handleAddClick, 
    handleSubtractClick, 
    handleMultiplyClick, 
    handleDivideClick, 
    handleClearClick } from './handlers.js';

//  Grab DOM Elements

const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const clear = document.getElementById('clear');






// Create event listeners

addition.addEventListener('click', handleAddClick);

subtraction.addEventListener('click', handleSubtractClick);

multiplication.addEventListener('click', handleMultiplyClick);

division.addEventListener('click', handleDivideClick);

clear.addEventListener('click', handleClearClick);