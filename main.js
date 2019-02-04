$('#getResults').on('click', function () {
  var a = $('#legA').val(),
      b = $('#legB').val(),
      c = $('#hypotenuse').val();

  /**
   * sin A = (a/c)
   * sin B = (b/c)
   * cos A = (b/c)
   * cos B = (a/c)
   * tan A = (a/b)
   * tan B = (b/a)
   */
  $('#sinAfrac').text("(" + a + "/" + c + ")");
  $('#sinBfrac').text("(" + b + "/" + c + ")");
  $('#cosAfrac').text("(" + b + "/" + c + ")");
  $('#cosBfrac').text("(" + a + "/" + c + ")");
  $('#tanAfrac').text("(" + a + "/" + b + ")");
  $('#tanBfrac').text("(" + b + "/" + a + ")");
  
  $('#sinAnum').text(a / c);
  $('#sinBnum').text(b / c);
  $('#cosAnum').text(b / c);
  $('#cosBnum').text(a / c);
  $('#tanAnum').text(a / b);
  $('#tanBnum').text(b / a);
})