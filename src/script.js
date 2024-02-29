var idInput = document.getElementById("id");
var titleInput = document.getElementById("title");
var releaseYearInput = document.getElementById("release-year");
var ratingInput = document.getElementById("rating");
var platformInput = document.getElementById("platform");
var numberOfPlayersInput = document.getElementById("number-of-players-input");
var selectInput = document.getElementById("select-input");
var addGameButton = document.getElementById("add-game");
var gameContainer = document.getElementById("game-container");
var newGame = {
    id: 20240228001,
    title: "Super Mario",
    releaseYear: new Date("1985.09.13."),
    rating: 10,
    platform: "Nintendo",
    type: "game",
};
console.log(newGame);
var newBoardGame = {
    id: 20240228002,
    title: "Chip & Dale",
    releaseYear: new Date("1993.12.10"),
    rating: 10,
    type: "boardgame",
    numberOfPlayers: 2,
};
console.log(newBoardGame);
var inventory = [];
inventory.push(newGame);
inventory.push(newBoardGame);
console.log(inventory);
// 4. Sukurti inputus, per juos ir bus pridedamas žaidimas arba boardgame; // `Vienas iš input turės būt selection input kuris nusakys tipą;
selectInput.addEventListener("change", function () {
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
addGameButton.addEventListener("click", function () {
    var newAddedGame;
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
    inventory.push(newAddedGame);
    console.log(inventory);
    // 6. Pridėjus naują resursą prie masyvo - visi masyvo elementai turi būt atvaizduoti ekrane;
    gameContainer.innerHTML = "";
    var newInventory = inventory.forEach(function (game) {
        var gameContainerWrapper = document.createElement("div");
        gameContainerWrapper.classList.add("game-card");
        gameContainerWrapper.style.border = "5px solid orange";
        var idWrapper = document.createElement("div");
        idWrapper.innerHTML = "Game ID: ".concat(game.id);
        gameContainerWrapper.append(idWrapper);
        var titleWrapper = document.createElement("div");
        titleWrapper.innerText = "Game title: ".concat(game.title);
        gameContainerWrapper.append(titleWrapper);
        var releaseYearWrapper = document.createElement("div");
        releaseYearWrapper.innerText = "Release Year: ".concat(game.releaseYear);
        gameContainerWrapper.append(releaseYearWrapper);
        var ratingWrapper = document.createElement("div");
        releaseYearWrapper.innerText = "Rating: ".concat(game.rating);
        gameContainerWrapper.append(ratingWrapper);
        var platformWrapper = document.createElement("div");
        platformWrapper.innerText = "Platform: ".concat(game.platform);
        gameContainerWrapper.append(platformWrapper);
        var numberOfPlayersWrapper = document.createElement("div");
        numberOfPlayersWrapper.innerText = "Number Of Players: ".concat(game.numberOfPlayers);
        gameContainerWrapper.append(numberOfPlayersWrapper);
        gameContainer.append(gameContainerWrapper);
        // 7. Paspaudus ant resurso kortelės - jo duomenys tu būt atvaizduoti consolėj;
        gameContainerWrapper.addEventListener("click", function () {
            console.log(JSON.stringify(game));
        });
        // 8. Kiekvienai kortelei pridėti button 'delete', ant kurio paspaudus - kortelė yra ištrinama iš masyvo. // vėliau nepamišt iš naujo atvaizduot kortelių;            
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-game");
        deleteButton.textContent = "Delete Game";
        gameContainerWrapper.append(deleteButton);
        deleteButton.addEventListener("click", function () {
            gameContainerWrapper.remove();
        });
    });
});
// 9. Viršuje applikacijos turi būt 3 mygtukai: type selection. Paspaudus vieną - ekrane liek tik boardgame, paspaudus kitą - tig game, trečias atvaizduoja visus resursus;
var ButtonBoardGames = document.getElementsByClassName("board-games");
console.log(ButtonBoardGames);
var ButtonGames = document.getElementsByClassName("games");
console.log(ButtonGames);
var ButtonAllGames = document.getElementsByClassName("all-games");
console.log(ButtonAllGames);
ButtonBoardGames.addEventListener("click", function () {
    inventory.filter(array.type.value === "boardgame");
});
