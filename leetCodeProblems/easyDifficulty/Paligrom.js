/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let j = t.length -1
    for (let i=0; i<s.length; i++) {
        if (s[i] !== t[j]) return false
        t--
    }
    return true
};

s.replace(" ", "").replace(",", "").replace(":", "")