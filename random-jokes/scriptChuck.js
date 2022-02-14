import i18Obj from "./translate.js";

const switchlngBox = document.querySelector(".switch-lng");
const translateElems = document.querySelectorAll("[data-i18]");
const langButtons = document.querySelectorAll(".switchlng");

switchlngBox.addEventListener("click", setLanguage);

function getTranslate(event) {
  if (!event.target.dataset.language) {
    return;
  }
  const language = event.target.dataset.language;
  const translation = i18Obj[language];

  translateElems.forEach((element) => {
    // ключ data-i18
    const translationKey = element.dataset.i18;
    // проверка
    if (translation[translationKey]) {
      if (element.placeholder) {
        element.placeholder = translation[translationKey];
      } else {
        element.textContent = translation[translationKey];
      }
    }
  });

  langButtons.forEach((element) => element.classList.remove("active"));
  event.target.classList.add("active");
}

// старое

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
