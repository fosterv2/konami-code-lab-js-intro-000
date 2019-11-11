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

function init() {
  // your code here
  let ind = 0
  function onKeyDownHandler(e) {
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
}
