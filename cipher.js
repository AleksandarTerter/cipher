

function cipher(msg, isCiphering, offset) {
    const alphabet = 'АаБбВвГгДдЕеЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЬьЮюЯяABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 .,!?@#-/';
    let result = '';

    for (let i = 0; i < msg.length; i++) {
        const originalChar = msg[i];
        const originalPosition = alphabet.indexOf(originalChar);

        const newPosition =
            isCiphering
                ? (originalPosition + offset)
                : (originalPosition - offset + alphabet.length);

        const newChar = 
            originalPosition == -1
                ? originalChar
                : alphabet[newPosition % alphabet.length];

        result += newChar;
    }

    document.getElementById('result').innerHTML = result;
}
