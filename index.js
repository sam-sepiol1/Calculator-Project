const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".calculator__display--current");

for (const button of buttons) {
    button.addEventListener("click", () => {
        let value = button.value;
        
		if (value !== 'AC' && value !== '=') {
			display.textContent += value;
		}
		if (value === "AC") {
			display.textContent = clear();
		}

		if (value === '=') {
			display.textContent = calculate(display.textContent);
		}
	});
}

function clear() {
    return "";
}

function calculate(value) {
    return eval(value);
}


