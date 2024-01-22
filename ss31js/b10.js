function maxSubArraySum(arr, n) {
    if(n>arr.length){
        return undefined;
    }
    let maxSum = 0;
    let currentSum = 0;
    for(let i = 0; i < n; i++){
        maxSum += arr[i];
    }
    currentSum = maxSum;
    for(let i = n; i < arr.length; i++){
        currentSum = currentSum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
const numbers = [1, 2, 5, 2, 8, 1, 5];
const n = 4;
const result = maxSubArraySum(numbers, n);
console.log(result);
const numbers1 = [1, 2, 5, 5];
const a = 2;
const ketQua = maxSubArraySum(numbers1, a);
console.log(ketQua);
