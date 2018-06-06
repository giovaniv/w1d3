function countLetters(str) {

  var letters = [];
  var result = [];
  var string = str.split(' ').join('');

  for (var i = 0; i < string.length; i++) {

    // if letter doesnt exist yet
    if (letters.indexOf(string[i]) < 0) {
      letters.push(string[i]);
      result[string[i]] = i;
    }
    // letter already exist
    else {
      result[string[i]] += ', ' + i;
    }
  }

  console.log(result);

}

countLetters('Lighthouse in the house');