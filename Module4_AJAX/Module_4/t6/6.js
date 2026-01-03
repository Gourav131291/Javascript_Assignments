document.getElementById("jokeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var searchTerm = document.getElementById("searchTerm").value.trim();
    var resultsSection = document.getElementById("results");

    resultsSection.innerHTML = "<p>Loading jokes...</p>";

    fetch("https://api.chucknorris.io/jokes/search?query=" + encodeURIComponent(searchTerm))
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            resultsSection.innerHTML = "";

            if (data.result.length === 0) {
                resultsSection.innerHTML = "<p>No jokes found. Try another term!</p>";
            } else {
                data.result.forEach(function(joke) {
                    var article = document.createElement("article");
                    var p = document.createElement("p");
                    p.textContent = joke.value;
                    article.appendChild(p);
                    resultsSection.appendChild(article);
                });
            }
        });
});
