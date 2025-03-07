// Morse Code Converter with Toggle Option
// Switch between 0/1 format and traditional Morse Code

let inputField, convertButton, consoleDiv, toggleButton;
let binaryMode = true; // Default mode: 0s and 1s

const morseCodeBinary = {
    'a': '01', 'b': '1000', 'c': '1010', 'd': '100', 'e': '0', 'f': '0010',
    'g': '110', 'h': '0000', 'i': '00', 'j': '0111', 'k': '101', 'l': '0100',
    'm': '11', 'n': '10', 'o': '111', 'p': '0110', 'q': '1101', 'r': '010',
    's': '000', 't': '1', 'u': '001', 'v': '0001', 'w': '011', 'x': '1001',
    'y': '1011', 'z': '1100', '1': '01111', '2': '00111', '3': '00011',
    '4': '00001', '5': '00000', '6': '10000', '7': '11000', '8': '11100',
    '9': '11110', '0': '11111', ' ': '/'
};

const morseCodeTraditional = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
    'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
};

function setup() {
    noCanvas();

    inputField = select("#textInput");
    convertButton = select("#convertButton");
    toggleButton = select("#toggleButton");
    consoleDiv = select("#console");

    convertButton.mousePressed(convertToMorse);
    toggleButton.mousePressed(toggleMode);
    inputField.changed(convertToMorse);
}

function convertToMorse() {
    let text = inputField.value().trim().toLowerCase();
    inputField.value(""); // Clear input

    let morseMapping = binaryMode ? morseCodeBinary : morseCodeTraditional;
    let morseTranslation = text.split('')
        .map(char => morseMapping[char] || '?')
        .join(' ');

    if (morseTranslation) {
        let modeText = binaryMode ? "(0s and 1s)" : "(Traditional Morse)";
        printToConsole(`"${text}" in Morse Code ${modeText}: ${morseTranslation}`);
    } else {
        printToConsole("Invalid input. Only letters, numbers, and spaces allowed.");
    }
}

function toggleMode() {
    binaryMode = !binaryMode;
    let modeText = binaryMode ? "Switch to Traditional Morse Code" : "Switch to 0s and 1s";
    toggleButton.html(modeText);
    printToConsole(`Mode switched to ${binaryMode ? "0s and 1s" : "Traditional Morse"}`);
}

function printToConsole(text) {
    let newText = createP(">> " + text);
    newText.style("color", "#00ffcc");
    newText.parent("console");
}

function keyPressed() {
    if (keyCode === ESCAPE) {
        fullscreen(false);
    }
}
