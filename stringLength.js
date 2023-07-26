

function stringLength(string){
    return string.length;
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  

  module.exports = {
    stringLength,
    reverseString,
  };