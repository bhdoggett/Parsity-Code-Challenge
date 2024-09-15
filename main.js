const findSum = function (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    };
    return sum;
};

const findFrequency = function (array) {
    let letterCount = {}
    let result = {}
    array.forEach(function (letter) {
        if (letterCount.hasOwnProperty(letter)) {
            letterCount[letter] += 1;
        } else {
            letterCount[letter] = 1
        };
    });

    let letterArray = Object.keys(letterCount);

    let valuesArray = Object.values(letterCount);

    let indexOfLeastFrequentLetter = valuesArray.indexOf(Math.min(...valuesArray))
    let indexOfMostFrequentLetter = valuesArray.indexOf(Math.max(...valuesArray))

    result.most = letterArray[indexOfMostFrequentLetter];
    result.least = letterArray[indexOfLeastFrequentLetter];

    return result;
}

const isPalindrome = function (str) {
    str = str.toLowerCase(str);
    let result = true;
    for (let i = 0; i < (str.length); i++) {
        if (str[i] !== str[(str.length - 1 - i)]) {
            result = false
        }
        if (result === false) {
            break;
        }
    }
    return result;
};

const largestPair = function (array) {
    let productArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] * array[i + 1]) {
            productArray.push(array[i] * array[i + 1])
        }
    };

    return Math.max(...productArray);
}

const removeParenth = function (str) {
    let stringArray = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '(' && str[i] !== ')') {
            stringArray.push(str[i]);
        }
    };
    return stringArray.join('');
}

const scoreScrabble = function (str) {
    let letters = str.split('')
    let result = 0
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u' || letters[i] === 'l' || letters[i] === 'n' || letters[i] === 'r' || letters[i] === 's' || letters[i] === 't') {
            result += 1;
        } else if (letters[i] === 'd' || letters[i] === 'g') {
            result += 2;
        } else if (letters[i] === 'b' || letters[i] === 'c' || letters[i] === 'm' || letters[i] === 'p' || letters[i] === 'c') {
            result += 3;
        } else if (letters[i] === 'f' || letters[i] === 'h' || letters[i] === 'v' || letters[i] === 'w' || letters[i] === 'y') {
            result += 4;
        } else if (letters[i] === 'k') {
            result += 5;
        } else if (letters[i] === 'j' || letters[i] === 'x') {
            result += 8;
        } else if (letters[i] === 'q' || letters[i] === 'z') {
            result += 10;
        }
    }
    return result;
}
