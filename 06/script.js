// Start    EYE
//          DYE (switched E to D)
//          DIE (switched Y to I)
//          LIE (switched D to L)
// END      LID

// Start word variable (same length as end)
// end word variable (same length as start)
    // if word len isn't equal
        // re-prompt
// swapCount variable
// Function (validSwap) to see how many letters were swapped (1 allowed)
// loop while start word !== end word
    // if validSwap
        // counter++
    // else
        // notify invalid swap, try again

const maxSwap = 1;
const startWord = getInput("Enter a start word, remember the length").toLowerCase();
const endWord = getInput(
  `Enter an end word of the same length (${startWord.length})`,
  startWord,
  true
).toLowerCase();
let swapCount = 0;
let currentWord = "", previousWord = startWord;

// Main
while (currentWord !== endWord) {
    currentWord = getInput(`Enter a new word, you may only swap ${maxSwap} letter(s). Previous: ${previousWord}`).toLowerCase();
    if (!validSwap(previousWord, currentWord, maxSwap)) {
        console.log(`Invalid swap, you may only swap ${maxSwap} letter(s)`);
        continue;
    }
    previousWord = currentWord;
    swapCount++;
}
console.log(`You win! It took you ${swapCount} swaps`);

// Functions
function validSwap(originalWord, newWord, swapCount) {
    let counter = 0;
    let oldLetter = "", newLetter = "";
    for (let i = 0, len = originalWord.length; i < len; i++) {
        if (originalWord[i] !== newWord[i]) {
            counter++;
            oldLetter = originalWord[i];
            newLetter = newWord[i];
        }
    }
    
    if (counter !== swapCount) {
        return false;
    }
    console.log(`${originalWord} > ${newWord} | Swapped: ${oldLetter} for: ${newLetter}`);
    return true;
}

function getInput(message, compareWord, compare=false) {
    let word = prompt(message);
    if (compare) {
        if (compareWord.length !== word.length) {
            getInput(message, compareWord, true);
        }
        return word;
    }
    return word;
}