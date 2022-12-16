// Code your solutions in this file
function writeCards(arr, event) {
  const newArr = []
  for ( let i = 0; i < arr.length; i++) {
    let elem = arr[i]
    let message = `Thank you, ${elem}, for the wonderful ${event} gift!`
    newArr.push(message)

  }
  return newArr
}

function countDown(i) {
  while (i >= 0) {
    console.log(i)
    i--
  }
}