function weirdnessTest(n) {
  if (n % 2 !== 0) {
    console.log('Weird')
  }else if (n % 2 === 0 & 2 <= n <= 5) {
    console.log('Not weird')
  }else if (n % 2 === 0 & 6 <= n <= 20) {
    console.log('Weird')
  }else (n % 2 === 0 & n > 20) {
    console.log('Not Weird')
  }
}