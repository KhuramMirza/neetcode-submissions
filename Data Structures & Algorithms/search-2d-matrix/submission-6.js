class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0; // First Row
        let bottom = matrix.length - 1; // Last Row

        while (top <= bottom) {
            let midRow = top + Math.floor((bottom - top) / 2); // Calculation the mid row first
            if (target > matrix[midRow][matrix[0].length - 1]) {
                top = midRow + 1;
            } else if (target < matrix[midRow][0]) {
                bottom = midRow - 1;
            } else if (
                // We have the Row where to value could possibly exist
                target >= matrix[midRow][0] &&
                target <= matrix[midRow][matrix[0].length - 1]
            ) {
                let left = 0;
                let right = matrix[midRow].length - 1;

                while (left <= right) {
                    let midValue = left + Math.floor((right - left) / 2);
                    if (target === matrix[midRow][midValue]) {
                        return true;
                    } else if (target < matrix[midRow][midValue]) {
                        right = midValue - 1;
                    } else {
                        left = midValue + 1;
                    }
                }
                return false;
            }
        }

        return false;
    }
}
