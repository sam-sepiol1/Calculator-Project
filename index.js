const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".calculator__display--current");

for (const button of buttons) {
	button.addEventListener("click", () => {
		let value = button.value;

		if (value !== "AC" && value !== "=" && value !== "delete") {
			display.textContent += value;
		}
		if (value === "AC") {
			display.textContent = clear();
		}
		if (value === "delete") {
			display.textContent = display.textContent.slice(0, -1);
		}

		if (value === "=") {
			display.textContent = calculate(display.textContent);
		}
	});
}


document.addEventListener("keyup", (e) => {
	console.log(e.key);
	
		switch (e.key) {
			case "Enter":
				display.textContent = calculate(display.textContent);
				break;
			case "Escape":
				display.textContent = clear();
				break;
			case "Delete":
				display.textContent = display.textContent.slice(0, -1);
				break;
			case "c":
				display.textContent = clear();
				break;
			case "=": 
				display.textContent = calculate(display.textContent);
				break;
			case "Backspace":
				display.textContent = display.textContent.slice(0, -1);
				break;
			default:
				if ("0123456789+-*/.".includes(e.key)) {
					display.textContent += e.key;
				}
				break;
		}
});

function clear() {
	return "";
}

function calculate(value) {
	return eval(value);
}
