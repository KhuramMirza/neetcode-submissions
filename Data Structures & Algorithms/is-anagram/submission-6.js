class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();

        for (let i = 0; i < s.length; i++) {
            if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
            else sMap.set(s[i], 1);
        }

        for (let i = 0; i < t.length; i++) {
            if (tMap.has(t[i])) tMap.set(t[i], tMap.get(t[i]) + 1);
            else tMap.set(t[i], 1);
        }

        console.log(sMap, tMap);

        if (sMap.size !== tMap.size) return false;
        for (const key of sMap.keys()) {
            if (!tMap.has(key)) return false;
            console.log(sMap.get(key), tMap.get(key));
            console.log(sMap.get(key) === tMap.get(key));
            if (!(sMap.get(key) === tMap.get(key))) return false;
        }

        return true;
    }
}
