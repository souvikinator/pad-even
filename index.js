/**
 * 
 * @param {String} str - string to be padded
 * @param {Number} n - padding value, positive value for right and negative for left padding
 * @param {String} c - padding character (default: " ")
 * @returns str with padding
 */
module.exports = function padeven(str, n, c) {
    if (Math.abs(n) <= str.length) {
        return str;
    }
    var m = Math.max((Math.abs(n) - str.length) || 0, 0);
    var pad = Array(m + 1).join(String(c || ' '));
    return (n < 0) ? pad + str : str + pad;
};