document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

let d = document.getElementById("d"),
b = document.getElementById("b"),
o = document.getElementById("o"),
h = document.getElementById("h")
m = document.getElementById("m")
l = document.getElementById("l")

function calculate(val, base, which) {
if (val.length === 0) {
    d.value = null,
    b.value = null,
    o.value = null,
    h.value = null
    m.value = null
    l.value = null
    return
} 
let inputtedVal = parseFloat(val, base) // decimal value

// results
switch(which) {
    case 'b':
        d.value = inputtedVal.toString(10).toUpperCase()
        o.value = inputtedVal.toString(8).toUpperCase()
        h.value = inputtedVal.toString(16).toUpperCase()
        m.value = Math.floor((b.value / Math.pow(10, b.value.toString().length - 1 )) % 10)
        l.value = b.value % 10
    break

    case 'o':
        d.value = inputtedVal.toString(10).toUpperCase()
        b.value = inputtedVal.toString(2).toUpperCase()
        h.value = inputtedVal.toString(16).toUpperCase()
        m.value = Math.floor((b.value / Math.pow(10, b.value.toString().length - 1 )) % 10)
        l.value = b.value % 10
    break

    case 'h':
        d.value = inputtedVal.toString(10).toUpperCase()
        b.value = inputtedVal.toString(2).toUpperCase()
        o.value = inputtedVal.toString(8).toUpperCase()
        m.value = inputtedVal.toString(8).toUpperCase()
        l.value = inputtedVal.toString(8).toUpperCase()
    break

    default:
        b.value = inputtedVal.toString(2).toUpperCase()
        o.value = inputtedVal.toString(8).toUpperCase()
        h.value = inputtedVal.toString(16).toUpperCase()
        m.value = Math.floor((b.value / Math.pow(10, b.value.toString().length - 1 )) % 10)
        l.value = b.value % 10
}
}