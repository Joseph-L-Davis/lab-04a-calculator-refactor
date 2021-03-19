// Import funcs
import { handleClick, clearClick } from './handlers.js';

// Pull DOM elements
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');


equals.addEventListener('click', handleClick);
clear.addEventListener('click', clearClick);
