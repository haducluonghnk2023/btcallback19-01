function fakeReduce(arr,callback,initialvalue) {
    let accumalator = initialvalue !== undefined ? initialvalue : arr[0];
    let startingIndex = initialvalue !== undefined ? 0 : 1;
    for (let i = startingIndex; i < arr.length; i++) {
        accumalator = callback(accumalator,arr[i],i,arr);
    }
    return accumalator;
}
const numbers = [1,2,3,4,5,6,7,8];
const sum = fakeReduce(numbers,(accum,current) => accum +current,0);
console.log(sum);