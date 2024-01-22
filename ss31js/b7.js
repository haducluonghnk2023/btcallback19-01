function fakeFilter(arr,callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const evens = fakeFilter(numbers, (num) => num % 2 === 0);
console.log(evens);
const soLonHonHai = fakeFilter(numbers, (num) => num >2);
console.log(soLonHonHai);