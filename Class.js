if (initialAge <= -1) {
  age = 0
  console.log('Age is not valid, setting age to 0..')
}else {
  age = initialAge
}

age += 1;

if (age < 13) {
  console.log('You are young..');
}else if (age >= 13 & age < 18) {
  console.log('You are a teenager..')
}else {
  console.log('You are old..')
}