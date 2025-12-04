function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAgeTernary(age) {
  age>18? True: False
}