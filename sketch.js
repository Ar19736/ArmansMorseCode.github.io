// Morse Code Converter using 0s and 1s

let inputField, convertButton, consoleDiv;

const morseCode = {
    'a': '01', 'b': '1000', 'c': '1010', 'd': '100', 'e': '0', 'f': '0010',
    'g': '110', 'h': '0000', 'i': '00', 'j': '0111', 'k': '101', 'l': '0100',
    'm': '11', 'n': '10', 'o': '111', 'p': '0110', 'q': '1101', 'r': '010',
    's': '000', 't': '1', 'u': '001', 'v': '0001', 'w': '011', 'x': '1001',
    'y': '1011', 'z': '1100', '1': '01111', '2': '00111', '3': '00011',
    '4': '00001', '5': '00000', '6': '10000', '7': '11000', '8': '11100',
    '9': '11110', '0': '11111', ' ': '/'
};

function setup() {
    noCanvas();

    inputField = select("#textInput");
    convertButton = select("#convertButton");
    consoleDiv = select("#console");

    convertButton.mousePressed(convertToMorse);
    inputField.changed(convertToMorse);
}

function convertToMorse() {
    let text = inputField.value().trim().toLowerCase();
    inputField.value(""); // Clear input

    let morseTranslation = text.split('')
        .map(char => morseCode[char] || '?')
        .join(' ');

    if (morseTranslation) {
        printToConsole(`"${text}" in Morse Code: ${morseTranslation}`);
    } else {
        printToConsole("Invalid input. Only letters, numbers, and spaces allowed.");
    }
}

function printToConsole(text) {
    let newText = createP(">> " + text);
    newText.style("color", "#00ffcc");
    newText.parent("console");
}