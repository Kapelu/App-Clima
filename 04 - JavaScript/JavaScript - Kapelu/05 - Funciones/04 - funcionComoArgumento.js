const f = function(x) {return x * x * x}
let numbers = [0, 1, 2, 5, 10]

function map(f, a) {
    let result = []
    let i
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i])
    return result
}

console.log(map(f,numbers))