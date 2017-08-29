var $svg = $('svg');
var $btn = $('.btn');

$btn.on('click', function () {
  $svg.toggleClass('engaged');
});
