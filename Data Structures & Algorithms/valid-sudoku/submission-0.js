class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const sokudoRowMatrix = new Map();
        const sokudoColMatrix = new Map();
        const masterMap = new Map();

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (!sokudoRowMatrix.has(board[r][c]) && board[r][c] !== ".") {
                    sokudoRowMatrix.set(board[r][c], 1);
                } else if (sokudoRowMatrix.has(board[r][c]) && board[r][c] !== ".") {
                    return false;
                }

                if (!sokudoColMatrix.has(board[c][r]) && board[c][r] !== ".") {
                    sokudoColMatrix.set(board[c][r], 1);
                } else if (sokudoColMatrix.has(board[c][r]) && board[c][r] !== ".") {
                    return false;
                }

                if (board[r][c] !== ".") {
                    const boxId = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;
                    if (!masterMap.has(boxId)) {
                        masterMap.set(boxId, new Map());
                        masterMap.get(boxId).set(board[r][c], 1);
                    } else if (masterMap.has(boxId)) {
                        if (!masterMap.get(boxId).has(board[r][c])) {
                            masterMap.get(boxId).set(board[r][c], 1);
                        } else if (masterMap.get(boxId).has(board[r][c])) {
                            return false;
                        }
                    }
                }
            }

            sokudoRowMatrix.clear();
            sokudoColMatrix.clear();
        }

        return true;
    }
}
