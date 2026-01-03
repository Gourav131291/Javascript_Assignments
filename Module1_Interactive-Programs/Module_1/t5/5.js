let year = prompt("Enter a year:");
year = parseInt(year);

let isLeap = false;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeap = true;
}

let check = isLeap 
    ? `${year} is a leap year.` 
    : `${year} is not a leap year.`;

document.getElementById("result").innerHTML = check;

console.log(check);
