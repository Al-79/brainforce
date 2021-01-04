document.addEventListener("turbolinks:load", function () {
  var isSelect = false
  var check_color = 'rgb(255, 165, 0)'// orange
  var normal_color = 'rgb(255, 255, 0)'// yellow
  $(function() {
    $('.concentration--card').on('click', function() {
      isSelect = !isSelect
      if (isSelect) {
        check_card = $(this)
        check_card.css('background-color', check_color)
        $('.concentration--comment').text("カードが選択されています")
      } else {
        $('.concentration--comment').text("カードを選択してください")
        // ペアがあったとき
        if (($(this).css('background-color') != check_color) && ($(this).children('.concentration--pair').attr('id') == check_card.children('.concentration--pair').attr('id'))) {
          check_card.hide()
          $(this).hide()
          $('.concentration--comment').text("揃いました！")
        }
        check_card.css('background-color', normal_color)
      }
    })

    // シャッフル
    $('#shuffle_card').on('click', function() {
      how_many_card = $('.concentration--card').length
      // 0からnまでの数列と空の数列を作る
      indexArr = Array.from({ length: how_many_card }).map((_, index) => index)
      randomArr = []
      // 空の数列に数を移し、ランダム数列にする
      while (indexArr.length > 0) {
        n = indexArr.length;
        k = Math.floor(Math.random() * n);
      
        randomArr.push(indexArr[k]);
        indexArr.splice(k, 1);
      }
      // 要素を格納
      var textArr = Array(how_many_card)
      var idArr = Array(how_many_card)
      var displayArr = Array(how_many_card)
      for (let step = 0; step < how_many_card; step++){
        a = $('.concentration--card#8')
        console.log(a)
        textArr[step]=$('.concentration--card#' + step).children('.concentration--text').text()
        idArr[step]=$('.concentration--card#' + step).children('.concentration--pair').attr('id')
        displayArr[step]=$('.concentration--card#' + step).css('display')
        console.log(step)
      }
      console.log(textArr)
      console.log(idArr)
      console.log(displayArr)
      // ランダム数列に合わせて要素を割り当てる
      for (let step = 0; step < how_many_card; step++){
        $('.concentration--card#' + step).children('.concentration--text').text(textArr[randomArr[step]])
        $('.concentration--card#' + step).children('.concentration--pair').attr('id', idArr[randomArr[step]])
        $('.concentration--card#' + step).css('display',displayArr[randomArr[step]])
      }
    })
  })
})