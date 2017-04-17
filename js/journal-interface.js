var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function(){
  $('#inputForm').submit(function(event){
    event.preventDefault();
    debugger;
    var input = $('#entry').val();
    var entry = new Entry(input);
    entry.assignInfo();
    var teaser = entry.getTeaser();
    var wordCount = entry.countWords();
    var vowelCount = entry.countVowels();
    var consonantCount = entry.countConsonants();
    $('#results').append('<li>Teaser:' + teaser +'</li>');
    $('#results').append('<li>Word Count:' + wordCount +'</li>');
    $('#results').append('<li>Vowel Count:' + vowelCount +'</li>');
    $('#results').append('<li>Consonant Count:' + consonantCount +'</li>');
  });
});
