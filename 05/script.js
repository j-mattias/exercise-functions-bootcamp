const sum = getInput("Bill amount");
const numOfFriends = getInput("Amount of friends");
const tip = getInput("Tip (in decimal 10% = 0.10)");

console.log(`Each person should pay: ${calculateCost(sum, numOfFriends, tip)}`);

function getInput(message) {
    const input = Number(prompt(message));
    if (isNaN(input)) {
        console.log("Please provide a valid number");
        return getInput(message);
    }
    return input;
}

function calculateCost(sum, numOfFriends, tip) {
    return ((sum + (sum * tip)) / numOfFriends);
}