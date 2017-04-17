$(document).ready(function(){
  $('#name-interface').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    $('#results').prepend("<li> " + name + "</li>" );
  });
});
