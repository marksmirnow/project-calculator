
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

	if (operation) {
		secondOperand = (+secondOperand) ? secondOperand += number : number;
		display.value = secondOperand;
	} else {
		firstOperand = (+firstOperand) ? firstOperand += number : number;  // не уверен насчет читабальности
		display.value = firstOperand;
	}

	console.log(firstOperand, secondOperand);
}

addListener(numberBtns, numberPress);

function opeationPress(event) {

	let operationSymbol = event.target.textContent;

	if (operation) {
		calculateResult();
		firstOperand = result;
		secondOperand = 0;
		display.value = result;
	}
	operation = operationSymbol;
	display.value += operation;

	console.log(firstOperand, operation, secondOperand, result);
}

addListener(operationBtns, opeationPress);


function calculateResult() {

	switch (operation) {
		case '+':
			result = +firstOperand + +secondOperand;
			break;
		case '-':
			result = +firstOperand - +secondOperand;
			break;
		case '*':
			result = +firstOperand * +secondOperand;
			break;
		case '/':
			result = +firstOperand / +secondOperand;
			break;
		default:
			alert('suka');
			break;
	}
}