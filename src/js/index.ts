let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("calculateButton");
buttonElement.addEventListener("click", calculate);

function calculate(): void {
    let number1inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("number1");
    let number2inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("number2");

    let number1string: string = number1inputElement.value;
    let number2string: string = number2inputElement.value;

    // https://stackoverflow.com/questions/14667713/typescript-converting-a-string-to-a-number
    let number1: number = parseInt(number1string, 10);
    let number2: number = parseInt(number2string, 10);

    let result: number = number1 + number2;

    let resultElement: HTMLDivElement = <HTMLDivElement>document.getElementById("result");
    resultElement.innerHTML = result.toString();
}

// advanced calculator
let buttonElementA: HTMLButtonElement = <HTMLButtonElement>document.getElementById("calculateButtonA");
buttonElementA.addEventListener("click", calculateAdvanced);

function calculateAdvanced(): void {
    let number1inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("number1A");
    let number2inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("number2A");

    let number1string: string = number1inputElement.value;
    let number2string: string = number2inputElement.value;

    // https://stackoverflow.com/questions/14667713/typescript-converting-a-string-to-a-number
    let number1: number = parseInt(number1string, 10);
    let number2: number = parseInt(number2string, 10);

    let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("operation");
    let operation: string = operationElement.value;
    console.log(operation);

    let result: number = calc(operation, number1, number2);
    let resultElement: HTMLDivElement = <HTMLDivElement>document.getElementById("resultA");
    resultElement.innerHTML = result.toString();
}

function calc(operation: string, a: number, b: number): number {
    switch (operation) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
    }
}