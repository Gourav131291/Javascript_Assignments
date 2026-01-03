const num = document.getElementById("num");
const btn = document.getElementById("btn");
const resultDiv = document.getElementById("result");

function isPrime(numb) {
    if (numb <= 1) return false; 
    if (numb === 2) return true;
    if (numb % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(numb); i += 2) {
        if (numb % i === 0) return false;
    }
    return true;
}

btn.addEventListener("click", function() {
    const numb = parseInt(numberInput.value);

    if (isNaN(numb)) {
        resultDiv.innerHTML = "Please enter a valid integer.";
        return;
    }

    const primeStatus = isPrime(numb)
        ? `${numb} is a prime number.`
        : `${numb} is not a prime number.`;

    resultDiv.innerHTML = primeStatus;
    console.log(primeStatus);
});
