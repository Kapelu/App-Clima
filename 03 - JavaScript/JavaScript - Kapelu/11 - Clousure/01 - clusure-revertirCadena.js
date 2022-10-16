
function reverse1(s){
    return s.split("").reverse().join(" ");
}

function reverse(s){
    return [...s].reverse().join(" ");
}

console.log(reverse1('freecodecamp'));
console.log(reverse1('pmacedoceerf'));