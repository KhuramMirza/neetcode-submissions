class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix[left].length - 1;
        let row = 0;

        while (left <= right && row < matrix.length) {
            let firstElement = matrix[row][left];
            let lastElement = matrix[row][right];

            if (target === firstElement || target === lastElement) return true;
            else if (target > firstElement && target < lastElement) {
                left++;
                right--;
            } else {
                row++;
            }
        }

        return false;
    }
}
