module.exports = function reverse (n) {
    let number = n.toString().replace('-','');
    let chars = number.split('');

    if(chars.pop === '0')
        chars.slice(0, -1);

    return chars.reverse().join('');
}
