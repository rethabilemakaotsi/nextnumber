

function calculateSum() {
    
    const firstNumber = parseFloat(document.getElementById('number').value);
    const secondNumber = parseFloat(document.getElementById('second').value);

    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    
    const sum = firstNumber + secondNumber;


    document.getElementById('result').textContent = `Sum: ${sum}`;
}
v

