const numbers = [];
let input;

    do {
        input = parseFloat(prompt("Enter a number (0 to stop):"));
            if (!isNaN(input) && input !== 0) {
            numbers.push(input);
            }
        } while (input !== 0);
        
numbers.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
    for (let num of numbers) {
        console.log(num);
    }