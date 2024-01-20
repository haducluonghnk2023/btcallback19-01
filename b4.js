function truncate(inputStr, n) {
    if (inputStr.length <= n) {
        return inputStr;
    } else {
        var truncatedStr = inputStr.substring(0, n) + "...";
        return truncatedStr;
    }
}
var originalStr = "hello world.I'm peter";
var result = truncate(originalStr, 11);
console.log(result);
