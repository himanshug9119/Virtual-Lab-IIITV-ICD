
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

let d = document.getElementById("d"),
  b = document.getElementById("b"),
  o = document.getElementById("o"),
  h = document.getElementById("h"),
  m = document.getElementById("m"),
  l = document.getElementById("l");

function calculate(val, base, which) {
  if (val.length === 0) {
    d.value = null;
    b.value = null;
    o.value = null;
    h.value = null;
    m.value = null;
    l.value = null;
    return;
  }

  let inputtedVal = val.includes("-")
    ? -parseInt(val, base)
    : parseInt(val, base); // handle negative numbers

  // results
  switch (which) {
    case "b":
      d.value = inputtedVal.toString(10).toUpperCase();
      o.value = inputtedVal.toString(8).toUpperCase();
      h.value = inputtedVal.toString(16).toUpperCase();
      m.value = Math.floor(
        (inputtedVal / Math.pow(10, inputtedVal.toString().length - 1)) % 10
      );
      l.value = inputtedVal % 10;
      break;

    case "o":
      d.value = inputtedVal.toString(10).toUpperCase();
      b.value = inputtedVal.toString(2).toUpperCase();
      h.value = inputtedVal.toString(16).toUpperCase();
      m.value = Math.floor(
        (inputtedVal / Math.pow(10, inputtedVal.toString().length - 1)) % 10
      );
      l.value = inputtedVal % 10;
      break;

    case "h":
      d.value = inputtedVal.toString(10).toUpperCase();
      b.value = inputtedVal.toString(2).toUpperCase();
      o.value = inputtedVal.toString(8).toUpperCase();
      m.value = Math.floor(
        (inputtedVal / Math.pow(10, inputtedVal.toString().length - 1)) % 10
      );
      l.value = inputtedVal % 10;
      break;

    default:
      b.value = inputtedVal.toString(2).toUpperCase();
      o.value = inputtedVal.toString(8).toUpperCase();
      h.value = inputtedVal.toString(16).toUpperCase();
      m.value = Math.floor(
        (inputtedVal / Math.pow(10, inputtedVal.toString().length - 1)) % 10
      );
      l.value = inputtedVal % 10;
  }
}

