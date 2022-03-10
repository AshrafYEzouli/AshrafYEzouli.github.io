"use strict";

//1.	Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(i, j) {
    if (i > j)
        return i;
    else
        return j;
}
console.log(max(1, 5));

//2.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(i, j, k) {
    if (i > j && i > k)
        return i;
    else if (j > i && j > k)
        return j;
    else
        return k;
}
console.log(maxOfThree(15, -6, 60.58));

//3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(char) {
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'
        || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
        return true;
    else
        return false;
}
console.log(isVowel('u'));

//4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function multiply(numbers) {
    let sum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        sum *= numbers[i];
    }
    return sum;
}
console.log(sum([1, 2, 3]));
console.log(multiply([1, 2, 3, 4]));

//5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}
console.log(reverse("jag testar"));

//6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(words) {
    let longest = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(findLongestWord(["important", "circumstance", "psychology"]))

//7.	Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
console.log(filterLongWords(["important", "circumstance", "psychology"], 9));

//8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array.
//E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e.
//Do NOT use any explicit looping construct; instead use functional programming style/approach.
function computeSumOfSquares(numbers) {
    return numbers.reduce((x, y) => x + Math.pow(y, 2));
}
console.log(computeSumOfSquares([1, 2, 3]));

//9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.
function printOddNumbersOnly(numbers) {
    return numbers.filter(i => i % 2 != 0);
}
console.log(printOddNumbersOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

//10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and 
//returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
function computeSumOfSquaresOfEvensOnly(numbers) {
    let evens = numbers.filter(i => i % 2 == 0);
    return evens.reduce((x, y) => Math.pow(x, 2) + Math.pow(y, 2));
}
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

//11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming.
// i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 
function sum2(numbers) {
    return numbers.reduce((x, y) => x + y);
}

function multiply2(numbers) {
    return numbers.reduce((x, y) => x * y);
}
console.log(sum2([1, 2, 3]));
console.log(multiply2([1, 2, 3, 4]));

//12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers.
// For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
function findSecondBiggest(numbers) {
    let first = Number.MIN_VALUE;
    let second = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            second = first;
            first = numbers[i];
        } else if (numbers[i] !== first && numbers[i] > second) {
            second = numbers[i];
        }
    }
    return second;
}
console.log(findSecondBiggest([1, 2, 3, 4, 5]));

//13.	Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence,
// e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), 
//prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
//printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
function printFibo(n, a, b) {
    let x = a, y = b, count = n, temp, fibo = [];
    while (count > 0) {
        temp = x;
        x = x + y;
        y = temp;
        fibo.push(y);
        count--;
    }
    return fibo;
}
console.log(printFibo(10, 0, 1));
