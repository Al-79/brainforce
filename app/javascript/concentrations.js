document.addEventListener("turbolinks:load", function () {
  var isSelect = false
  var isSelect = false
  var check_color = 'rgb(255, 165, 0)'// orange
  var normal_color = 'rgb(255, 255, 0)'// yellow
  var how_many_card = $('.concentration--card').length
  $(function() {
    // カードを選択
    $('.concentration--tail').on('click', function() {
      isSelect = !isSelect
      if (isSelect) {
        check_card = $(this)
        check_card.next().css('display','block')
        $('.concentration--comment').text("カードが選択されています")
      } else {
        $(this).next().css('display','block')
        // ペアがあったとき
        if (($(this).next().find('.concentration--pair').attr('id') == check_card.next().find('.concentration--pair').attr('id'))) {
          setTimeout(()=>{
            check_card.hide()
            $(this).hide()
            check_card.next().css('display','none')
            $(this).next().css('display','none')
          }, 1000);
          $('.concentration--comment').text("揃いました！")
        } else{
          setTimeout(()=>{
            check_card.next().css('display','none')
            $(this).next().css('display','none')
          }, 1000);
          $('.concentration--comment').text("残念！")
        }
      }
    })

    // オープン
    $('#open_card').on('click', function() {
      isSelect = false
      // 裏が残っているやつだけ、表をオープンにする
      for (let step = 0; step < how_many_card; step++){
        if ($($('.concentration--card')[step]).find('.concentration--tail').css('display') != 'none'){
          $($('.concentration--card')[step]).find('.concentration--head').css('display','block')
        }
      }
      $('.concentration--comment').text("カードをオープンしました")
      setTimeout(()=>{
        for (let step = 0; step < how_many_card; step++){
          $($('.concentration--card')[step]).find('.concentration--head').css('display','none')
        }
      }, 3000);
    })

    // シャッフル
    $('#shuffle_card').on('click', function() {
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
      var colorArr = Array(how_many_card)
      var idArr = Array(how_many_card)
      var displayArr = Array(how_many_card)
      for (let step = 0; step < how_many_card; step++){
        textArr[step]=$($('.concentration--card')[step]).find('.concentration--text').text()
        colorArr[step]=$($('.concentration--card')[step]).find('.concentration--text').css('color')
        idArr[step]=$($('.concentration--card')[step]).find('.concentration--pair').attr('id')
        displayArr[step]=$($('.concentration--tail')[step]).css('display')
      }
      // ランダム数列に合わせて要素を割り当てる
      for (let step = 0; step < how_many_card; step++){
        $($('.concentration--card')[step]).find('.concentration--text').text(textArr[randomArr[step]])
        $($('.concentration--card')[step]).find('.concentration--text').css('color',colorArr[randomArr[step]])
        $($('.concentration--card')[step]).find('.concentration--pair').attr('id', idArr[randomArr[step]])
        $($('.concentration--tail')[step]).css('display',displayArr[randomArr[step]])
      }
    })
  })
})