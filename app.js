const rot13 = (str) => {
  let letter = "";
  let number = 0;
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt([i]) >= 78){
      number = str.charCodeAt([i]) - 13;
      letter = String.fromCharCode(number);
      newStr += letter;
    }
    else if(str.charCodeAt([i]) >= 65 && str.charCodeAt([i]) < 78) {
      number = str.charCodeAt([i]) + 13;
      letter = String.fromCharCode(number);
      newStr += letter;
    }
    else if(str[i] !== /A-Z/g){
      newStr += str[i];
    }
  }
  console.log(newStr);
  return newStr;
}
