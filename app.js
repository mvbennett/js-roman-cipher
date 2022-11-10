const rot13 = (str) => {
  let encoded = str.split('').map((original) => {
    if (original.charCodeAt() >= 78) {
      const number = original.charCodeAt() - 13;
      return String.fromCharCode(number);
    } else if (original.charCodeAt() >= 65 && original.charCodeAt() < 78) {
      const number = original.charCodeAt() + 13;
      return String.fromCharCode(number);
    } else {
      return original
    }
  }).join('');
  return encoded;
}
