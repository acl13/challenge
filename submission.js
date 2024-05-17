const findSum = function(array) {
    let sum = 0;
    for (num of array) {
        sum += num;
    }
    return sum;
  };
  

  const findFrequency = function(array) {
    let count = {}; 
    for (let i = 0; i < array.length; i++) {
        let item = array[i]; 
        if (count[item]) {
            count[item] += 1;
        } else {
            count[item] = 1;
        }
    }

 let keys = Object.keys(count);
 let values = Object.values(count); 

 let max = Math.max(...values);
 let min = Math.min(...values); 
 let maxIndex = values.indexOf(max);
 let minIndex = values.indexOf(min); 

let result = {}; 
result.most = keys[maxIndex];
result.least = keys[minIndex];
  
return result;
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
    let products = [];
    for (i = 0; i < array.length -1; i++) {
        let product = array[i] * array[i + 1];
        products.push(product);
    }

    let largest = Math.max(...products);
    return largest; 
  };


  
  const removeParenth = function(str) {
    let newString = str.replace(/\(.*\)/g, '');
    return newString;
  };


  
  const scoreScrabble = function(str) {
    let array = str.toLowerCase().split('');
    let sum = 0;
    for (letter of array) {
        if (letter === 'q' || letter === 'z') {
            sum += 10;
        } else if (letter === 'j' || letter === 'x') {
            sum += 8;
        } else if (letter === 'k') {
            sum += 5;
        } else if (letter === 'f' || letter === 'h' || letter === 'v' || letter === 'w' || letter === 'y') {
            sum += 4;
        } else if (letter === 'b' || letter === 'c' || letter === 'm' || letter === 'p') {
            sum += 3;
        } else if (letter === 'd' || letter === 'g') {
            sum += 2;
        } else {
            sum += 1;
        }
    }
    return sum; 
  };

