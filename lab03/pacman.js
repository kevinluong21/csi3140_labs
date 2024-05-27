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

function checkFinishedLevel(game) {
    let i = 0;
    //if there's a cell with ".C", then we consider it to be eaten
    while ((game[i] != ".") && (i < game.length)) {
        i++;
    }

    if (i < game.length) { //loop stopped before end of array
        return false;
    }

    return true; //if there's no cell with ".", then the level is completed
}

function nextLevel(game) {
    return createGame(game.length);
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

    if (checkFinishedLevel(game)) {
        game = nextLevel(game);
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

    if (checkFinishedLevel(game)) {
        game = nextLevel(game);
    }

    return game;
}