$(document).ready(function(){
  $('#button').submit(function(event){
    event.preventDefault();
    var entry = new Entry($('#entry').val());
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
