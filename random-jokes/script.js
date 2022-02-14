const urlEng = "https://api.icndb.com/jokes/random?escape=javascript";
const jokeElement = document.querySelector(".joke");
const btn = document.querySelector(".btn");

async function getJoke() {
  const res = await fetch(urlEng); // ждет ответа от сервера по запросу (fetch)
  const data = await res.json(); // убирает кавычки с ключей
  //   const data = JSON.parse(res);
  // const dataToSend = JSON.stringify(data); //добавляет кавычки к ключам для отправки в запросе, противоположно JSON.parse и .json()

  return data["value"]["joke"];
}

async function setJoke() {
  let joke = await getJoke();
  jokeElement.textContent = joke;
}

window.addEventListener("load", setJoke);
btn.addEventListener("click", setJoke);
