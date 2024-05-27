var pacman;
var ghost;
var score = 0;

function createGame(n) {
    const game = new Array(n);

    for (let i = 0; i < game.length; i++) {
        game[i] = ".";
    }

    pacman = Math.floor(Math.random() * (n - 1));
    game[pacman] = "C";

    do {
        ghost = Math.floor(Math.random() * (n - 1));
    } while (ghost == pacman);

    game[ghost] = "^";

    do {
        var fruit = Math.floor(Math.random() * (n - 1));
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

function resetLevel(game) {
    return createGame(game.length);
}

function moveLeft(game) {
    if (pacman > 0) {
        if (game[pacman - 1] == ".") {
            score++;
        }
        game[pacman - 1] = game[pacman - 1] + "C";

        if (game[pacman] == "C") {
            game[pacman] = "";
        }
        else if (game[pacman] != "") {
            game[pacman] = game[pacman].slice(0, 1);
        }

        pacman = pacman - 1;
    }

    if (checkFinishedLevel(game)) {
        game = resetLevel(game);
    }

    return game;
}

function moveRight(game) {
    if (pacman < game.length) {
        if (game[pacman + 1] == ".") {
            score++;
        }

        game[pacman + 1] = game[pacman + 1] + "C";
        
        if (game[pacman] == "C") {
            game[pacman] = "";
        }
        else if (game[pacman] != "") {
            game[pacman] = game[pacman].slice(0, 1);
        }

        pacman = pacman + 1;
    }

    if (checkFinishedLevel(game)) {
        game = resetLevel(game);
    }

    return game;
}

function moveGhost(game) {
    direction = Math.round(Math.random());

    if (direction == 0) { //move left
        if (ghost > 0) {
            game[ghost - 1] = game[ghost - 1] + "^";

            if (game[ghost] == "^") {
                game[ghost] = "";
            }
            else if (game[ghost] != "") {
                game[ghost] = game[ghost].slice(0, 1);
            }
            ghost = ghost - 1;
        }
    }
    else {
        if (ghost < game.length) {
            game[ghost + 1] = game[ghost + 1] + "^";

            if (game[ghost] == "^") {
                game[ghost] = "";
            }
            else if (game[ghost] != "") {
                game[ghost] = game[ghost].slice(0, 1);
            }
            ghost = ghost + 1;
        }
    }

    return game;
}

var ghost = createGame(10);
//move ghost at 1 ms
const ghostMovement = setTimeout(function() {
    moveGhost(game);
}, 1);