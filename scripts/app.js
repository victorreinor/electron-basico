let generate = () => {
  let inputTxt = document.getElementById("txt")

  if (!inputTxt.value) {
    alert('Please input something')
    return;
  }

  const base64 = btoa(inputTxt.value)
  let span = document.createElement('span')

  span.innerHTML = base64
  let body = document.getElementById('result')
  body.innerHTML = ''
  body.appendChild(span)
}

let decode = () => {
  let inputTxt = document.getElementById("txt")

  if (!inputTxt.value) {
    alert('Please input something')
    return;
  }

  const base64 = atob(inputTxt.value)
  let span = document.createElement('span')

  span.innerHTML = base64
  let body = document.getElementById('result')
  body.innerHTML = ''
  body.appendChild(span)
}
