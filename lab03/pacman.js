var pacman;
var ghost;
var score = 0;

function createGame(n) {
    const game = new Array(n);

    for (let i = 0; i < game.length; i++) {
        game[i] = ".";
    }

    pacman = Math.floor(Math.random() * n);
    game[pacman] = "C";

    do {
        ghost = Math.floor(Math.random() * n);
    } while (ghost == pacman);

    game[ghost] = "^";

    do {
        var fruit = Math.floor(Math.random() * n);
    } while ((fruit == pacman) || (fruit == ghost));

    game[fruit] = "@";

    return game;
}

function moveLeft(game) {
    if (pacman > 0) {
        if (game[pacman - 1] == ".") {
            score++;
        }
        game[pacman - 1] = game[pacman - 1] + "C";
        game[pacman] = "";
        pacman = pacman - 1;
    }

    return game;
}

function moveRight(game) {
    if (pacman < game.length) {
        if (game[pacman + 1] == ".") {
            score++;
        }
        game[pacman + 1] = game[pacman + 1] + "C";
        game[pacman] = "";
        pacman = pacman + 1;
    }

    return game;
}