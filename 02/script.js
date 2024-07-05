console.log(extractYear("2019-10-14"));

function extractYear(stringDate) {
    if (stringDate.length !== 10) {
        console.log("Expected YYYY-MM-DD pattern");
    }

    return stringDate.substring(0, 4);
}