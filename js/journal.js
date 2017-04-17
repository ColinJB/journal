
function Entry(input){
  this.input = input;
  this.array = [];
  this.arrayVowels = [];
  this.arrayConsonants = [];
  this.teaser = "";
}

var vowels = ["a","e","i","o","u"];

Entry.prototype.assignInfo = function(){
  this.array = this.input.split(" ");
  for (var i = 0; i < this.input.length; i++){
    var character = this.input.charAt(i).toLowerCase();
    if (vowels.includes(character)){
      this.arrayVowels.push(character);
    } else {
      this.arrayConsonants.push(character);
    }
  }
  var arrayTeaser = [];
  for(var i = 0; i < 8; i++){
    var word = this.array[i];
    arrayTeaser.push(word);
  }
  this.teaser = arrayTeaser.join(" ");
}

Entry.prototype.countWords = function(){
  return this.array.length;
}

Entry.prototype.countVowels = function(){
  return this.arrayVowels.length;
}

Entry.prototype.countConsonants = function(){
  return this.arrayConsonants.length;
}

Entry.prototype.getTeaser = function(){
  return this.teaser;
}
