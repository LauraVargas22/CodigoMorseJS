const dictionary = {
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "ñ": "--.--", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..", "/": "-..-.", " ": "/"
};

function translateCodMorse () {
    const userText = document.getElementById('userText').value.toLowerCase();
    const translateText = document.getElementById('translateText');

    let translateMorse = "";

    for (let i = 0; i < userText.length; i++) {
        const char = userText[i];
        translateMorse += dictionary[char] || "?" + ' ';
        if (i < userText.length - 1) {
            translateMorse += " ";
        }
    }

    translateMorse = translateMorse.trim();

    translateText.textContent = `El codigo Morse es: ${translateMorse}`;
}


function translateTexttoMorse () {
    const userCode = document.getElementById('userCode').value.trim();
    const translateCod = document.getElementById('translateCod');
    
    const morseToText = {};
    
    for (const key in dictionary) {
        const value = dictionary[key];
        morseToText[value] = key;
    }

    const morseChars = userCode.split(" ");
    let translateText = "";

    for (let i = 0; i < morseChars.length; i++) {
        const morseChar = morseChars[i];
        translateText += morseToText[morseChar] || "?";
    }

    translateCod.textContent = `El texto es: ${translateText}`;
}


