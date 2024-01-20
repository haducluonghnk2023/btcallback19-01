function chunkArrayInGroups(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
let originalArray = [1,2,3,4,5,6];
let chunkedArray = chunkArrayInGroups(originalArray, 4);
console.log(chunkedArray);

