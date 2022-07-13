const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    let resultString = '';

    for (let i=0; i< expr.length; i += 10) {
       let morzeLetter = '';
        for(let j=i + 9; j > i; j -= 2 ) {
            let block = expr[j-1] + expr[j];
            if (block === '**') {
                resultString += ' ';
                break;
            }
      
            switch (block) {
                case '00':
                    break;
                case '10':
                    morzeLetter = '.' + morzeLetter
                    break;
                case '11':
                    morzeLetter = '-' + morzeLetter
                    break;
            }
        }
  
        if (morzeLetter.length) {
            resultString += MORSE_TABLE[morzeLetter];
        }
    }

return resultString;
}

module.exports = {
    decode
}