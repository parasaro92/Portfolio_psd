$('document').ready(function() {
  $('#all').click(function() {
    $('.all').fadeIn(1000);
  });
  $('#photo').click(function() {
    $('.all').fadeOut(1000);
    $('.photo').fadeIn(1000);
  });
  $('#nature').click(function() {
    $('.all').fadeOut();
    $('.nature').fadeIn(1000);
  });  
});

    