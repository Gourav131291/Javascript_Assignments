 function concat(strings) {
            let result = "";
            for (let i = 0; i < strings.length; i++) {
                result += strings[i];
            }
            return result;
        }
const givenNames = ["Johnny", "DeeDee", "Joey", "Marky"];
const concatenated = concat(givenNames);
document.getElementById("result").textContent = concatenated;