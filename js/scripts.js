$(document).ready(function() {

  // list of colours for link hover states
  var colors = ['#ffe01c', '#ff46a2', '#ff9630', '#26e4bc', '#ec2945', '#307fff'];
  var last_color;
  var prev_bg;
  var random;

  // link hover state
  $('a:not(.lightbox)').mouseenter(function() {
    prev_bg = this.style.color;
    do {
      random = colors[Math.floor(Math.random() * colors.length)];
    } while (random == last_color);
    $(this).css('color', 'white');
    $(this).css('background-color', random);
    $(this).css('border-bottom-color', random);
    last_color = random;
  });

  // undo link hover state
  $('a:not(.lightbox)').mouseleave(function() {
      $(this).css('color', 'black');
      $(this).css('background-color', 'white');
      $(this).css('border-bottom-color', 'black');
  });

  // resets hover states on browser back button press
  $(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload(); 
    }
  });

});
