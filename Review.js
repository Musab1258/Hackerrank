function review(str) {
  let arr = str.split().join()
  let first = '';
  let second = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] % 2 === 0) {
      first.concat(arr[i])
    }else if (arr[i] % 2 !== 0) {
      second.concat(arr[i])
    }
    return final = `${first} + ' ' + ${second}`
  }
}

console.log(review('tall'))