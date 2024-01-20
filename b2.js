
function largestOfArrs(...arrays) {
    let results = [];
    for (let arr of arrays) {
        if (arr.length > 0) {
            arr.sort((a, b) => b - a);
            let largest = arr[0];
            results.push(largest);
        } 
    }
    return results;
}

console.log(largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
console.log(largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]));
console.log(largestOfArrs());


