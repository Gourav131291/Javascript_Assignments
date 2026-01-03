async function getJoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log("Random Chuck Norris Joke:");
  console.log(data.value);
}

getJoke();
