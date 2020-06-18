const state = {
    board: [
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ],
    turn: 'yellow',
    won: false,
}

function dropStone(colIndex) {
    const rowIndex = findEmptyIndex(state.board[colIndex]);
    state.board[colIndex][rowIndex] = state.turn;
    state.turn = changeTurn();
}

