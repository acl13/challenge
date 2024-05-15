const findSum = function(array) {
    let sum = 0;
    for (num of array) {
        sum += num;
    }
    return sum;
  };
  

  const findFrequency = function(array) {
    // your code here - don't forget to return an object!
  };
  
  const isPalindrome = function(str) {
    let lowerCase = str.toLowerCase();
    let reverseString = lowerCase.split('').reverse().join('');
    if (lowerCase === reverseString) {
        return true; 
    } else {
        return false; 
    }
  };

  
  const largestPair = function(array) {
    // your code here - don't forget to return a number!
  };
  
  const removeParenth = function(str) {
    // your code here - don't forget to return a string!
  };
  
  const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!
  };