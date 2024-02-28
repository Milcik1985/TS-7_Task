"use strict";
const newGame = {
    id: 20240228001,
    title: "Super Mario",
    releaseYear: "1985.09.13.",
    rating: 10,
    platform: "Nintendo",
    type: "game",
};
console.log(newGame);
// 4. Sukurti inputus, per juos ir bus pridedamas žaidimas arba boardgame; // `Vienas iš input turės būt selection input kuris nusakys tipą;
const selectInput = document.getElementById("select-input");
const numberofPlayersInput = document.getElementById("number-of-players-input");
selectInput.addEventListener("click", () => {
    if (selectInput.value === "Game") {
        numberofPlayersInput.style.display = "none";
    }
    else {
        numberofPlayersInput.style.display = "block";
    }
});
// 5. Parašyt funkcija kuri prideda žaidimą arba boargame prie inventoriaus masyvo;
// 6. Pridėjus naują resursą prie masyvo - visi masyvo elementai turi būt atvaizduoti ekrane;
// 7. Paspaudus ant resurso kortelės - jo duomenys tu būt atvaizduoti consolėj;
// 8. Kiekvienai kortelei pridėti button 'delete', ant kurio paspaudus - kortelė yra ištrinama iš masyvo. // vėliau nepamišt iš naujo atvaizduot kortelių;
// 9. Viršuje applikacijos turi būt 3 mygtukai: type selection. Paspaudus vieną - ekrane liek tik boardgame, paspaudus kitą - tig game, trečias atvaizduoja visus resursus;
