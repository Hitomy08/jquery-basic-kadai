$(function () {
  $('#change-color').on('click', function () {
    // 1	「文字色変化」ボタンを押した際に、文字色が任意の色に更新される
    $('#target').css('color', 'red');
  });

  $('#change-text').on('click', function () {
    //2	「文字内容変化」ボタンを押した際に、任意の文字内容に更新される
    $('#target').text('文字内容変化したよ！');
  });

  $('#fade-out').on('click', function () {
    //3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function () {
    //4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる
    $('#target').fadeIn();
  });

});