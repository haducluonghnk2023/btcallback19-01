function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        const sum = arr[left]+arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else {
            left++;
        }
    }  
    return undefined;       
}
const sortedArray = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
const result = sumZero(sortedArray);
console.log(result);
const a = [1,2,3];
const b = sumZero(a);
console.log(b);
const c = [-4, -3, -2, 2];
const d = sumZero(c);
console.log(d);
