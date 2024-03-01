"use strict";
const idInput = document.getElementById("id");
const titleInput = document.getElementById("title");
const releaseYearInput = document.getElementById("release-year");
const ratingInput = document.getElementById("rating");
const platformInput = document.getElementById("platform");
const numberOfPlayersInput = document.getElementById("number-of-players-input");
const selectInput = document.getElementById("select-input");
const addGameButton = document.getElementById("add-game");
const gameContainer = document.getElementById("game-container");
const newGame = {
    id: 20240228001,
    title: "Super Mario",
    releaseYear: new Date("1985.09.13."),
    rating: 10,
    platform: "Nintendo",
    type: "game",
};
console.log(newGame);
const newBoardGame = {
    id: 20240228002,
    title: "Chip & Dale",
    releaseYear: new Date("1993.12.10"),
    rating: 10,
    type: "boardgame",
    numberOfPlayers: 2,
};
console.log(newBoardGame);
let inventories = [];
inventories.push(newGame);
inventories.push(newBoardGame);
console.log(inventories);
// 4. Sukurti inputus, per juos ir bus pridedamas žaidimas arba boardgame; // `Vienas iš input turės būt selection input kuris nusakys tipą;
selectInput.addEventListener("change", () => {
    if (selectInput.value === "Game") {
        numberOfPlayersInput.style.display = "none";
    }
    else {
        numberOfPlayersInput.style.display = "block";
        platformInput.style.display = "none";
    }
});
console.log(selectInput.value);
// 5. Parašyt funkcija kuri prideda žaidimą arba boargame prie inventoriaus masyvo;
addGameButton.addEventListener("click", () => {
    let newAddedGame;
    if (selectInput.value === "Game") {
        newAddedGame = {
            id: parseInt(idInput.value),
            title: titleInput.value,
            releaseYear: new Date(releaseYearInput.value),
            rating: parseInt(ratingInput.value),
            platform: platformInput.value,
            type: "game",
        };
    }
    else {
        newAddedGame = {
            id: parseInt(idInput.value),
            title: titleInput.value,
            releaseYear: new Date(releaseYearInput.value),
            rating: parseInt(ratingInput.value),
            type: "boardgame",
            numberOfPlayers: parseInt(numberOfPlayersInput.value),
        };
    }
    inventories.push(newAddedGame);
    console.log(inventories);
    // 6. Pridėjus naują resursą prie masyvo - visi masyvo elementai turi būt atvaizduoti ekrane;
    gameContainer.innerHTML = "";
    inventories.forEach((game) => {
        const gameContainerWrapper = document.createElement("div");
        gameContainerWrapper.classList.add("game-card");
        gameContainerWrapper.style.border = "5px solid orange";
        const idWrapper = document.createElement("div");
        idWrapper.innerHTML = `Game ID: ${game.id}`;
        gameContainerWrapper.append(idWrapper);
        const titleWrapper = document.createElement("div");
        titleWrapper.innerText = `Game title: ${game.title}`;
        gameContainerWrapper.append(titleWrapper);
        const releaseYearWrapper = document.createElement("div");
        releaseYearWrapper.innerText = `Release Year: ${game.releaseYear}`;
        gameContainerWrapper.append(releaseYearWrapper);
        const ratingWrapper = document.createElement("div");
        releaseYearWrapper.innerText = `Rating: ${game.rating}`;
        gameContainerWrapper.append(ratingWrapper);
        const platformWrapper = document.createElement("div");
        if ("platform" in game) {
            platformWrapper.innerText = `Platform: ${game.platform}`;
        }
        ;
        gameContainerWrapper.append(platformWrapper);
        const numberOfPlayersWrapper = document.createElement("div");
        if ("numberOfPlayers" in game) {
            numberOfPlayersWrapper.innerText = `Number Of Players: ${game.numberOfPlayers}`;
        }
        ;
        gameContainerWrapper.append(numberOfPlayersWrapper);
        gameContainer.append(gameContainerWrapper);
        // 7. Paspaudus ant resurso kortelės - jo duomenys tu būt atvaizduoti consolėj;
        gameContainerWrapper.addEventListener("click", () => {
            console.log(JSON.stringify(game));
        });
        // 8. Kiekvienai kortelei pridėti button 'delete', ant kurio paspaudus - kortelė yra ištrinama iš masyvo. // vėliau nepamišt iš naujo atvaizduot kortelių;            
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-game");
        deleteButton.textContent = "Delete Game";
        gameContainerWrapper.append(deleteButton);
        deleteButton.addEventListener("click", () => {
            gameContainerWrapper.remove();
        });
    });
});
// 9. Viršuje applikacijos turi būt 3 mygtukai: type selection. Paspaudus vieną - ekrane liek tik boardgame, paspaudus kitą - tig game, trečias atvaizduoja visus resursus;
// const ButtonBoardGames: HTMLButtonElement = document.getElementsByClassName("board-games");
// console.log(ButtonBoardGames)
// const ButtonGames: HTMLButtonElement = document.getElementsByClassName("games");
// console.log(ButtonGames)
// const ButtonAllGames: HTMLButtonElement = document.getElementsByClassName("all-games");
// console.log(ButtonAllGames)
// ButtonBoardGames.addEventListener("click", () => {
//     inventory.filter(array.type.value === "boardgame")
// })
