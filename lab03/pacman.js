function createGame(n) {
    const game = new Array(n);

    for (let i = 0; i < game.length; i++) {
        game[i] = ".";
    }

    var pacman = Math.floor(Math.random() * n);
    game[pacman] = "C";

    do {
        var ghost = Math.floor(Math.random() * n);
    } while (ghost == pacman);

    game[ghost] = "^";

    do {
        var fruit = Math.floor(Math.random() * n);
    } while ((fruit == pacman) || (fruit == ghost));

    game[fruit] = "@";

    return game;
}