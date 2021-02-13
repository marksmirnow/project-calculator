
const display = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const equalBtn = document.getElementById('equals');
const clearBtns = document.querySelectorAll('.clear-btn');
const decimalBtn = document.getElementById('decimal');

let firstOperand;
let secondOperand;
let operation;
let result;

function addListener(nodeList, callback) {

	nodeList.forEach(nodeElem => {
		nodeElem.addEventListener('click', (event) => {
			callback(event);
		})
	})
}

function numberPress(event) {

	let number = event.target.textContent;

	firstOperand = (+firstOperand) ? firstOperand += number : number;  // не уверен насчет читабальности
	display.value = firstOperand;
}

addListener(numberBtns, numberPress);

function opeationPress(event) {

	let operationSymbol = event.target.textContent;
	operation = operationSymbol;
	display.value = operation;
}

addListener(operationBtns, opeationPress);