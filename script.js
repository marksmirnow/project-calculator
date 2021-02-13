
const display = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const equalBtn = document.getElementById('equals');
const clearBtns = document.querySelectorAll('.clear-btn');
const decimalBtn = document.getElementById('decimal');


function addListener(nodeList, callback) {

	nodeList.forEach(nodeElem => {
		nodeElem.addEventListener('click', (event) => {
			callback(event);
		})
	})
}