/**
 * @param {string} s
 * @return {number}
 */

var titleToNumber = function(s) {
        let sArr = s.split('');
        let len = sArr.length;
        let num = 0;
        for(var i = len - 1; i >=  0;  i--) {
            num += ((sArr[i].charCodeAt() - 'A'.charCodeAt()) + 26) * (i+1);
        }
        return num;
}