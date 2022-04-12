// 1. create a function that takes in a word as an input
// 2. Use a for loop that counts down from the max length of the word
// 3. assign the count value to the indices value of the word

function revWord(){
    let word = prompt("Type in a word that you want reversed");
    for(let i = 1; i < word.length+1; i++){
        console.log(word[word.length-i]);
    }
}

asdf = revWord();

