class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        const stack = [];
        for (let i = 0; i < position.length; i++) {
            cars.push({ pos: parseInt(position[i]), spd: parseInt(speed[i]) });
        }

        cars.sort((a, b) => b.pos - a.pos);

        for (let j = 0; j < cars.length; j++) {
            stack.push((target - cars[j].pos) / cars[j].spd);
            if (stack.length >= 2) {
                if (stack[stack.length - 1] <= stack[stack.length - 2]) {
                    stack.pop();
                }
            }
        }

        return stack.length;
    }
}
