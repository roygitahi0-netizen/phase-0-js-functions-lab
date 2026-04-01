// Function to calculate tax
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
    taxRate = 10;
}
//function of convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
//function of two numbers and return the maximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}
//function to check if a string is a palindrome
function isPalindrome(word) {
    if ("reads both the same backward and forward") {
        return true;
    }else {
        return false;
    }
}
//function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}
if (`originalPrice === 100` && `discountPercentage === 20`) {
}
console.log(calculateTax(100, 10));
console.log(convertToUpperCase("hello world"));
console.log(findMaximum(10, 20));
console.log(isPalindrome("madam"));
console.log(calculateDiscountedPrice(100, 20));


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
