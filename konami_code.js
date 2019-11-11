const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init(e) {
  // your code here
  let ind = 0
    const key = e.key
    if (key === codes[ind]) {
      ind++;
      if (ind === codes.length) {
        alert("Congratulations!");
        ind = 0;
      }
    } else {
      ind = 0;
    }
}
