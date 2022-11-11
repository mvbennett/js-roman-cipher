const encode = (letter, num) => {
  const number = letter.charCodeAt() + num;
  return String.fromCharCode(number);
}

const rot13 = (str) => {
  let encoded = str.split('').map((letter) => {
    if (letter.charCodeAt() >= 78) {
      return encode(letter, -13);
    } else if (letter.charCodeAt() >= 65 && letter.charCodeAt() < 78) {
      return encode(letter, 13);
    } else {
      return letter
    }
  }).join('');
  return encoded;
}
