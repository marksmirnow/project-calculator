// Получаем все кнопки и дисплей

const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const clearBtns = document.querySelectorAll('.clear-btn');
const decimalBtn = document.getElementById('decimal');
const display = document.getElementById('display');
let memoryCurrentNumber = 0;				// Текущее число
let memoryNewNumber = false;				// Вводим новое число или продолжаем вводить старое
let memoryPendingOperation = '';			// Операция, ожидающая подтверждения



// Вешаем события на кнопки

for (let i = 0; i < numberBtns.length; i++) {						// Кнопки с числами
	let numberBtn = numberBtns[i];

	numberBtn.addEventListener('click', function (e) {
		numberPress(e.target.textContent);
	});
}


for (let i = 0; i < operationBtns.length; i++) {					// Кнопки с операциями
	let operationBtn = operationBtns[i];

	operationBtn.addEventListener('click', function (e) {
		operation(e.target.textContent);
	})
}


for (let i = 0; i < clearBtns.length; i++) {							// Кнопки очистки
	let clearBtn = clearBtns[i];

	clearBtn.addEventListener('click', function (e) {
		clearDisplay(e.srcElement.id);
	})
}


decimalBtn.addEventListener('click', addDecimal);					// Кнопка десятичной дроби



// Что происходит при нажатии на отдельные кнопки

function numberPress(number) {

	if (memoryNewNumber) {
		display.value = number;
		memoryNewNumber = false;
	} else {

		if (display.value === '0') {
			display.value = number;
		} else {
			display.value += number;
		}
	}

}


function operation(symbol) {

	let localOperationMemory = display.value;

	if (memoryNewNumber && memoryPendingOperation !== '=') {
		display.value = memoryCurrentNumber;
	} else {
		memoryNewNumber = true;

		if (memoryPendingOperation === '+') {
			memoryCurrentNumber += +localOperationMemory;
		} else if (memoryPendingOperation === '-') {
			memoryCurrentNumber -= +localOperationMemory;
		} else if (memoryPendingOperation === '*') {
			memoryCurrentNumber *= +localOperationMemory;
		} else if (memoryPendingOperation === '/') {
			memoryCurrentNumber /= +localOperationMemory;
		} else {
			memoryCurrentNumber = +localOperationMemory;
		}
	}

	display.value = memoryCurrentNumber;
	memoryPendingOperation = symbol;
}


function clearDisplay(id) {

	display.value = '0';

	if (id === 'ce') {
		memoryNewNumber = true;
	} else {
		memoryCurrentNumber = 0;
		memoryNewNumber = false;
		memoryPendingOperation = '';
	}
}


function addDecimal() {

	let localDecimalMemory = display.value;

	if (localDecimalMemory.includes('.') === false) {
		localDecimalMemory += '.';
	}

	display.value = localDecimalMemory;
}