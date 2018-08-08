$(function () {

  $('#toolbar').append('Display up to HSK ');
  [1, 2, 3, 4, 5, 6, 'all'].forEach(function (level) {
    $('<button>').attr('id', 'btn-' + level).text(level).click(function () {
      $('#wrapper').removeClass().addClass('d' + level);
      $('button').removeClass();
      $(this).addClass('selected');
    }).appendTo('#toolbar');
  });
  $('#btn-all').click();

});
