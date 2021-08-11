
module.exports = (function () {
    parseString=function(str, max, ch, rst) {
        ch = ch || '.'
        str = str + '';

        var rst = rst || [];
        var i = str.lastIndexOf(ch)
        i = i < 0 ? str.length : i;
        var Sa = str.substring(0, i);

        str = str.substring(i + 1, str.length)

        rst.push(Sa)
        rst.push(str)
    return rst
    }

    path = function(name) {
        name = `${$__dirname}\\${name}`
        return name
    }
})()