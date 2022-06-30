$(document).ready(function() {
    $('#animation-header').particleground({
      dotColor: '#757575',
      lineColor: '#616161'
    });
    $('.intro').css({
      'margin-top': -($('.intro').height() / 2)
    });
  });