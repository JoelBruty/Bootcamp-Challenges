//Challenge 1

console.log("[Challenge 1]")

// Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’. 
// console.log the string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”)

const todaysMeals = (breakfast, lunch, dinner) => {
    console.log(`Breakfast: ${breakfast}`)
    console.log(`Lunch: ${lunch}`)
    console.log(`Dinner: ${dinner}`)
}

todaysMeals("cereal", "pasties", "chicken")

//Challenge 2

console.log("[Challenge 2]")

// Pass in a parameter called num. If num is a data type of string or num is less than or equal to 
// 0, return the string 'needs to be a positive number’.  If num is divisible by 3 return “fizz”, if num is 
// divisible by 5 return “buzz”, if num is divisible by both 3 and 5 return “fizz buzz”. If num is not 
// divisible by 3 or 5 return the value of num. Print the result

const validNumber = (numToCheck) => {
    if (typeof(numToCheck) != "number" || numToCheck <= 0){
        return false
    }
}

const fizzOrBuzz = (num) => {
    if(validNumber(num) == false){
        return "Needs to be a positive number"
    }
    
    if (num % 3 == 0 && num % 5 == 0){
        //fizz buzz
        return "Fizz Buzz"
    }
    else if (num % 3 == 0){
        //fizz
        return "Fizz"
    }
    else if (num % 5 == 0){
        //buzz
        return "Buzz"
    }
    else{
        return num
    }
}

console.log(fizzOrBuzz(30))

//Challenge 3

console.log("[Challenge 3]")

// Pass in 2 parameters called num1 and num2. Create an if statement that checks if the result 
// of the sum is even, if it is return the number, otherwise return the numbers multiplied together. If 
// the parameters are not numbers return the error message 'make sure you enter 2 numbers'.

const validityCheck = (numCheck1, numCheck2) => {
    if (typeof(numCheck1) != "number" || typeof(numCheck2) != "number"){
        return false
    }
}

const areBothNumbersEven = (num1, num2) => {
    if (validityCheck(num1, num2) == false){
        return "Make sure you enter 2 numbers"
    }
    
    if((num1 + num2) % 2 == 0){
        return num1 + num2
    }
    else{
        return num1 * num2
    }
}

console.log(areBothNumbersEven(4,6))

//Challenge 4

console.log("[Challenge 4]")

// Generate 6 random numbers between 1-50, add them to an array and log the array.

const randomNumber = () => {
    return Math.floor(Math.random()*51)
}

let numArray = []

for (i = 0; i < 6; i++){
    numArray.push(randomNumber())
}

console.log(numArray)

//Challenge 5

console.log("[Challenge 5]")

//If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Return an array 
// that contains 9-0 using a loop that does this. Print the result

let numArray2 = []

const numLoop = (i) => {
    for (i = 9; i >= 0; i--){
        numArray2.push(i)
    }
}

numLoop(9)
console.log(numArray2)

//Challenge 6

console.log("[Challenge 6]")

// Create a JavaScript program that prints out a multiplication table for a given number.  
// The program should take a number(can store in a variable), representing the multiplication table 
// they want to generate. Use a for loop to iterate from 1 to 10.  
// Inside the loop, multiply the current number by the stored number and print out the result in the 
// format: <input number> * <current number> = <result>. 

const multiplicationTable = (multiplyNum) => {
    for (i = 1; i <=10; i++){
        console.log(`${multiplyNum} * ${i} = ${multiplyNum*i}`)
    }
}

multiplicationTable(3)

//Challenge 7

console.log("[Challenge 7]")

// Create a JavaScript program that calculates the average grade of a student based on their 
// scores in three subjects: Math, Science, and English. 
// Define a function named calculateAverage that takes three parameters: mathScore, scienceScore, 
// and englishScore. 
// Inside the function, calculate the average score by adding up the scores of the three subjects and 
// dividing by 3. 
// Return the average score from the function. 
// Call the calculateAverage with the separate score results as arguments and log the result to the 
// console. 
// Modify the program to also determine and display the corresponding letter grade based on the 
// average score.  
// For example, A for scores >= 90, B for scores >= 80, and so on. 

const calculateAverage = (mathScore, scienceScore, englishScore) => {
    return Math.round((mathScore+scienceScore+englishScore)/3)
}

const getGrade = (score) => {
    if (averageScore >= 90){
        return "A"
    }
    else if (averageScore >= 80){
        return "B"
    }
    else if (averageScore >= 70){
        return "C"
    }
    else{
        return "D"
    }
}

let averageScore = calculateAverage(95,65,85)
let grade

console.log(`Score: ${averageScore}`)

console.log(`Grade: ${getGrade()}`)