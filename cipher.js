
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

function deCipher(msg) {
    let deCiphered = '';

    for (let i = 0; i < msg.length; i++) {
        const char = msg[i];
        const position = alphabet.indexOf(char);
        let origninalPosition = alphabet[(position - 3 + alphabet.length) % alphabet.length];
        if (position == -1) {
            origninalPosition = char;
        }

        deCiphered += origninalPosition;
    }

    document.getElementById('result').innerHTML = deCiphered;
}

function cipher(msg) {
    let ciphered = '';

    for (let i = 0; i < msg.length; i++) {
        const char = msg[i];
        const position = alphabet.indexOf(char);
        const cipheredPosition = (position + 3) % alphabet.length;
        let cipheredChar = alphabet[cipheredPosition];
        if (position == -1) {
            cipheredChar = char;
        }

        ciphered += cipheredChar;
    }

    document.getElementById('result').innerHTML = ciphered;
}