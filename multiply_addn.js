export function multiplyAddn(a,b){
    let result = 0;
    let absoluteb = Math.abs(b); // Ensure positive iteration for negative numbers
    for (let i = 0; i < absoluteb; i++){
        result += a;
    }
    // If b is negative, invert the result
    // return b < 0 ? -result : result;
    if (b < 0)
        return -result;
    else return result;
}

// Example usage:
// console.log(multiplyAddn(3, 3));
// console.log(multiplyAddn(3, -3));
// console.log(multiplyAddn(-2, 3));
// console.log(multiplyAddn(-2, -4));