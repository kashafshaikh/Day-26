
// Day 26

// ### Question 1: Reverse a Number

// Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.

// Example:
// typescript
// reverseNumber(1234); // Output: 4321
// reverseNumber(567);  // Output: 765

function reverseNumber(n : number): number{
    let reversed = 0;

    while (n > 0){
        let lastDig = n % 10;
        reversed = reversed * 10 + lastDig;
        n = Math.floor(n / 10);
    }
    return reversed;
}

console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(567));  // Output: 765

// ### Question 2: Find the Average of Numbers in a String

// Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.

// Example:
// typescript
// averageOfNumbersInString('The numbers are 12, 15, and 20.'); // Output: 15.666...
// averageOfNumbersInString('No numbers here!'); // Output: NaN

function averageOfNumbersInString(str: string):number{
    let sum =0;
    let count=0;
    let currentNumber = 0;
    let isNumberActive = false;

    for(let i=0; i<str.length; i++){
        let char = str.charAt(i);
        
    if(char >= '0' && char <= '9'){
        currentNumber= currentNumber*10 + (char.charCodeAt(0)-'0'.charCodeAt(0));
        isNumberActive = true;
    }    
    else{
     if(isNumberActive){
        sum += currentNumber
        count++
        currentNumber = 0;
        isNumberActive=false;
        }
      }
    }
    if (isNumberActive) {
        sum += currentNumber;
        count++;
    }

    return count > 0 ? sum / count : NaN;
}
console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN


























