/*Write a program to compute the number of sudoku solutions (fill the zero elements of a given partial sudoku table)
Fill numbers from 1, 2, 3, .., 9 to 9 x 9 table so that:
Numbers of each row are distinct
Numbers of each column are distinct
Numbers on each sub-square 3 x 3 are distinct*/

let count = 0;

function check(board, row, col, num) {
    for (let d = 0; d < board.length; d++) {
        if (board[row][d] == num || board[d][col] == num) {
            return false;
        }
    }

    let sqrt = Math.sqrt(board.length);
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;

    for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
        for (let d = boxColStart; d < boxColStart + sqrt; d++) {
            if (board[r][d] == num) {
                return false;
            }
        }
    }
    return true;
}

function solveSudoku(board, n) {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 0) {
                row = i;
                col = j;
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    if (isEmpty) {
        count++;
        return;
    }

    for (let num = 1; num <= n; num++) {
        if (check(board, row, col, num)) {
            board[row][col] = num;
            solveSudoku(board, n);
            board[row][col] = 0;
        }
    }
}

function sudokuSolver(board) {
    count = 0;
    solveSudoku(board, board.length);
    return count;
}

let board = [
    [0, 0, 3, 4, 0, 0, 0, 8, 9],
    [0, 0, 6, 7, 8, 9, 0, 2, 3],
    [0, 8, 0, 0, 2, 3, 4, 5, 6],
    [0, 0, 4, 0, 6, 5, 0, 9, 7],
    [0, 6, 0, 0, 9, 0, 0, 1, 4],
    [0, 0, 7, 2, 0, 4, 3, 6, 5],
    [0, 3, 0, 6, 0, 2, 0, 7, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
console.log(sudokuSolver(board));