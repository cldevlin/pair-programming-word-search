const transpose = (matrix) => {
    return matrix[0].map((value, column) => matrix.map((row) => row[column]));
};

const searchDiagonal = (letters, word) => {
    const downwardsLR = [];

    for (let i = 0; i < letters[0].length; i++) {
        let currentDiagonal = letters[0][i];
        let counter = i + 1;
        for (let x = 1; x < letters.length; x++) {
            if (letters[x][counter] !== undefined) {
                currentDiagonal += letters[x][counter];
                counter++;
            }
        }
        downwardsLR.push(currentDiagonal);
    }
    for (let d = 0; d < downwardsLR.length; d++) {
        if (downwardsLR[d].includes(word)) {
            return true;
        }
    }
    return false;
};

const wordSearch = (letters, word) => {
    const reverseLetters = transpose(letters);

    if (searchDiagonal(letters, word)) {
        return true;
    }
    if (searchDiagonal(reverseLetters, word)) {
        return true;
    }

    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const verticalJoin = transpose(letters).map((column) => column.join(""));
    for (let v of verticalJoin) {
        if (v.includes(word)) return true;
    }
    const reverseHorizontal = letters.map((ls) => ls.reverse().join(""));
    for (l of reverseHorizontal) {
        if (l.includes(word)) return true;
    }

    const reverseVertical = transpose(letters).map((column) =>
        column.reverse().join("")
    );
    for (let v of reverseVertical) {
        if (v.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;
