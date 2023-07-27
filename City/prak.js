"use strict";
let citiesBot = [
  "киев",
  "харьков",
  "одесса",
  "днепр",
  "запорожье",
  "львов",
  "кривой рог",
  "николаев",
  "мариуполь",
  "винница",
  "полтава",
  "чернигов",
  "черкассы",
  "житомир",
  "херсон",
  "ужгород",
  "ивано-франковск",
  "каменец-подольский",
  "кропивницкий",
  "луцк",
  "мелитополь",
  "мукачево",
  "новомосковск",
  "бердянск",
  "хмельницкий",
  "радомышль",
  "северодонецк",
  "славутич",
  "сумы",
  "татарбунары",
  "теплодар",
  "торез",
  "узин",
  "харцызск",
  "ялта",
  "энергодар",
  "южное",
  "языково",
  "здолбунов",
  "каменка-днепровская",
  "горловка",
  "ананьев",
  "белая церковь",
  "волочиск",
  "геническ",
  "деражня",
  "евпатория",
  "железногорск",
  "запорожье",
  "иловайск",
  "кореиз",
  "люботин",
  "мурованые куриловцы",
  "нововолынск",
  "орехов",
  "пирятин",
  "раменское",
  "саки",
  "смела",
  "тернополь",
  "ульяновка",
  "фастов",
  "харцызск",
  "черкассы",
  "шостка",
  "щолкино",
  "южноукраинск",
  "яремче",
  "запорожье",
  "иличевск",
  "кировское",
  "любомль",
  "мукачево",
  "никополь",
  "орлов",
  "первомайск",
  "радивилов",
  "севастополь",
  "смела",
  "троицкое",
  "усть-донецк",
  "фастов",
  "харцызск",
  "черкассы",
  "шостка",
  "щолкино",
  "южноукраинск",
  "яремче",
];

let field = document.querySelector("#field");
let message = document.querySelector("#message");
let text = document.querySelector("#cityBot");

let cities = [];

field.addEventListener("keydown", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    let word = field.value;
    let firstWordLetter = word[0];
    let lastCities = cities[cities.length - 1];

    if (cities.length === 0) {
      cities.push(word);
      lastCities = cities[cities.length - 1];

      console.log("chod kompa");

      for (let i = 0; i < citiesBot.length; i++) {
        let wordBot = citiesBot[i];
        if (
          wordBot[0] === lastCities[lastCities.length - 1] &&
          !cities.includes(wordBot)
        ) {
          console.log(wordBot);
          cities.push(wordBot);
          text.textContent = wordBot;
          citiesBot.slice(i, 1);
          break;
        } else text.textContent = "User Win";
      }
    } else {
      if (
        firstWordLetter === lastCities[lastCities.length - 1] &&
        !cities.includes(word)
      ) {
        cities.push(word);
      } else {
        message.textContent =
          "This city don`t start from last lettter privious city or was writed before";
      }

      console.log("chod kompa");
      lastCities = cities[cities.length - 1];

      for (let i = 0; i < citiesBot.length; i++) {
        let wordBot = citiesBot[i];
        if (
          wordBot[0] === lastCities[lastCities.length - 1] &&
          !cities.includes(wordBot)
        ) {
          console.log(wordBot);
          cities.push(wordBot);
          text.textContent = wordBot;
          citiesBot.slice(i, 1);
          break;
        } else text.textContent = "User Win";
      }
    }
    field.value = "";
  }
});
