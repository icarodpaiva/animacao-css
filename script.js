const body = document.getElementsByTagName('body')[0]
let helloWorld = []

for (let c = 0; c < 10; c++) {
  helloWorld[c] = `<div id=h${c}>Hello World</div>`

  if (c % 3 == 0) {
    body.innerHTML += `${helloWorld[c]}`
  } else if (c % 2 == 0) {
    body.innerHTML += `${helloWorld[c]}`.toUpperCase()
  } else {
    body.innerHTML += `${helloWorld[c]}`.toLowerCase()
  }
}
