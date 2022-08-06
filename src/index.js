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
    let result = '';
    let exprArr = expr.split(/(.{10})/).filter(O=>O);
    
    let morseArr = exprArr.map(numStr => {
                       
        return numStr.replace(/10/g, ".").replace(/11/g, '-').replace(/0/g, '').replace(/\*{10}/g, ' ');              
    })

    let resultArr = morseArr.map(letter => {
        if(letter == ' '){return ' '} 
       return  MORSE_TABLE[letter];
    })
        
     result =  resultArr.join('');
    
    return result;
}

module.exports = {
    decode
}