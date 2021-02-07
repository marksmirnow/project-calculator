// Получаем все кнопки и дисплей

const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const clearBtns = document.querySelectorAll('.clear-btn');
const equalButton = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');
const display = document.getElementById('display');

let firstOperand = '';
let secondOperand = '';
let operation = undefined;
let result = undefined;

const addListners = (nodesList, callback) => {
	nodesList.forEach(node => {
		node.addEventListener('click', e => {
			callback(e);
		})
	})
};

const numberPressHandler = (e) => {
	if(operation) {
		secondOperand += e.target.textContent;
		display.value = secondOperand;
	} else {
		firstOperand += e.target.textContent;
		display.value = firstOperand;
	}
};

const calculateResult = () => {
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
		  throw new Error('unexpected operation! bitch');
	  }
};

const operationHandler = (e) => {
	const operationSymbol = e.target.textContent;
	if(operation) {
		calculateResult();
		firstOperand = result;
		secondOperand = '';
	}
	operation = operationSymbol;
	display.value = operationSymbol;
};

const equalHandler = () => {
	calculateResult();
	display.value = result;
};

addListners(numberBtns, numberPressHandler);
addListners(operationBtns, operationHandler);

equalButton.addEventListener('click', e => {
	equalHandler();
});
