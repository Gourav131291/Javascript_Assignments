  function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }
        const ul = document.getElementById('results');
        let roll;
        do {
            roll = rollDice();
            const li = document.createElement('li');
            li.textContent = `You rolled: ${roll}`;
            ul.appendChild(li);

        } while (roll !== 6);