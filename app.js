// 1. create a function that takes in a word as an input
// 2. Use a for loop that counts down from the max length of the word
// 3. assign the count value to the indices value of the word

// function revWord(){
//     let word = prompt("Type in a word that you want reversed");
//     for(let i = 1; i < word.length+1; i++){
//         console.log(word[word.length-i]);
//     }
// }

// asdf = revWord();



// 1. create a function that takes in a series of words as an input
// 2. use a for loop that adds each letter into another word
// 3. create logic in loop to capitalize a letter if the last letter was a " "
// 4. return the new word

// function capWords(){
//     let oldWord = prompt("Please input a word");
//     let newWord = "";
//     for(let i = 0; i < oldWord.length; i++){
//         let currentLetter = oldWord[i];
//         if(oldWord[i-1] == " " || i == 0) newWord = newWord.concat(currentLetter.toUpperCase());
//         else newWord = newWord.concat(currentLetter);
//     }
//     console.log(newWord);
// }

// fdsa = capWords()


// 1. create a function that receives a string
// 2. create a for loop that evaluates each letter
// 3. track the current letter
// 4. during for loop, evaluate whether this letter is the same as the last letter
// 5. during for loop, if letter is the same as last letter, add one to a counter
// 6. during for loop, if letter is not the sane as last letter, append counter and previous letter to a string variable
// 7. restart counter
// 8. after for loop, print string variable

// function countLetters(){
//     let inputString = prompt("Enter repeated letters randomly");
//     let counter = 0;
//     let newString = "";
//     for(let i = 0; i < inputString.length+1; i++){
//         let stringLetter = inputString[i];
//         let lastLetter = inputString[i-1];
//         if(stringLetter == lastLetter || i == 0) counter += 1;
//         else {newString = newString.concat(`${counter}${lastLetter}`); counter = 1;}
//     }
//     console.log(newString);
// }

// let djfks = countLetters();

// 1. create a function that receives a word
// 2. check if input word is the same as reversed word using previously created reverse word function
// 3. print out if the word is a palindrome



// function revWord(inputWord){
//     let word = inputWord;
//     let returnWord = ""
//     for(let i = 1; i < word.length+1; i++){
//         returnWord = returnWord.concat(word[word.length-i]);
//     }
//     return returnWord;
// }



// function checkPalindrome(){
//     inputWord = prompt("Please enter a word you think may be a palindrome")
//     let checkWord = revWord(inputWord);
//     if(inputWord == checkWord) console.log("You were right! Its a palindrome!");
//     else console.log("You were wrong :(. It isn't a palindrome")
// }

// run = checkPalindrome()