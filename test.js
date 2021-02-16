const setDecimal = (num) => {
    switch(num){
        case 10: return 'a';
        case 11: return 'b';
        case 12: return 'c';
        case 13: return 'd';
        case 14: return 'e';
        case 15: return 'f';
        default: return `${num}`;
    }
}

for(let r = 0; r < 16; r++){
    for(let g = 0; g < 16; g++){
        for(let b = 0; b < 16; b++){
            console.log(`data = data.replace(/#${setDecimal(r)}${setDecimal(r)}${setDecimal(g)}${setDecimal(g)}${setDecimal(b)}${setDecimal(b)}/gi,'#${setDecimal(r)}${setDecimal(g)}${setDecimal(b)}')`);
        }
    }
}