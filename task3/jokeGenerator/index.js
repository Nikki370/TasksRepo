async function getJoke() {
  const jokePara = document.getElementById("joke");
  jokePara.innerText = "Loading joke... 😂";

  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();

  jokePara.innerText = data.setup + " 😄\n" + data.punchline;
}
