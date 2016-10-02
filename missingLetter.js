var missingLetter;

missingLetter = {
  fearNotLetter: function(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (str[0] != "a") {
      return undefined;
    }
    for (var i = 0; i < str.length; i++ ) {
      if (str.charAt(i)!= alphabet.charAt(i)) {
        return alphabet[i];
      }
    }
    return str;
      },
    }











module.exports = missingLetter;
