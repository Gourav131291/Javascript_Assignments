document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var query = document.getElementById("query").value.trim();

    if (!query) {
        console.log("Please enter a search term.");
        return;
    }

    var url = "https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(query);

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("Search results:", data);

            if (data.length > 0) {
                var show = data[0].show;
                console.log("First result:");
                console.log("Name: " + show.name);
                console.log("Genres: " + show.genres.join(", "));
                console.log("Summary: " + (show.summary ? show.summary.replace(/<[^>]+>/g, '') : "No summary available."));
            } else {
                console.log("No shows found for your search.");
            }
        });
});
